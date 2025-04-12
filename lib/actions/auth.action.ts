"use server";

import { auth, db } from "@/firebase/admin";
import { SignInParams, SignUpParams, User } from "@/types";
import { Timestamp } from "firebase/firestore";
import { cookies } from "next/headers";

// Session duration (1 week)
const SESSION_DURATION = 60 * 60 * 24 * 7;

// Set session cookie
export async function setSessionCookie(idToken: string) {
  const cookieStore = await cookies();

  // Create session cookie
  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: SESSION_DURATION * 1000, // milliseconds
  });

  // Set cookie in the browser
  cookieStore.set("session", sessionCookie, {
    maxAge: SESSION_DURATION,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });
}

export async function signUp(params: SignUpParams) {
  const { uid, name, email } = params;

  try {
    // check if user exists in db
    const userRecord = await db.collection("users").doc(uid).get();
    if (userRecord.exists)
      return {
        success: false,
        message: "User already exists. Please sign in.",
      };

    // save user to db
    await db.collection("users").doc(uid).set({
      name,
      email,
      paddleCustomerId: null, // Not created yet; will be set when the user upgrades to a paid plan
      subscription: {
        plan: "trial",                 // Default trial plan
        paddleSubscriptionId: null,   // Will be populated for paid plans
        status: "active",             // Indicates active free subscription
        currentPeriodStart: null,     // Subscription period start
        currentPeriodEnd: null,       // Subscription period end
        isTrialExpired: false,
        trialExpiration: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)  //To be expired after 3 days automatically
      },
      createdAt: new Date(),          // Alternatively, use Firebase server timestamps if available
      updatedAt: new Date(),
    });

    return {
      success: true,
      message: "Account created successfully. Please sign in.",
    };
  } catch (error: any) {
    console.error("Error creating user:", error);

    // Handle Firebase specific errors
    if (error.code === "auth/email-already-exists") {
      return {
        success: false,
        message: "This email is already in use",
      };
    }

    return {
      success: false,
      message: "Failed to create account. Please try again.",
    };
  }
}

export async function signIn(params: SignInParams) {
  const { email, idToken } = params;

  try {
    const userRecord = await auth.getUserByEmail(email);
    if (!userRecord)
      return {
        success: false,
        message: "User does not exist. Create an account.",
      };

    await setSessionCookie(idToken);
  } catch (error: any) {
    console.log("");

    return {
      success: false,
      message: "Failed to log into account. Please try again.",
    };
  }
}

// Sign out user by clearing the session cookie
export async function signOut() {
  const cookieStore = await cookies();

  cookieStore.delete("session");
}

// Get current user from session cookie
export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = await cookies();

  const sessionCookie = cookieStore.get("session")?.value;
  if (!sessionCookie) return null;

  try {
    const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);

    // get user info from db
    const userRecord = await db
      .collection("users")
      .doc(decodedClaims.uid)
      .get();
    if (!userRecord.exists) return null;

    return {
      ...userRecord.data(),
      id: userRecord.id,
    } as User;
  } catch (error) {
    console.log(error);

    // Invalid or expired session
    return null;
  }
}

export async function updateTrialStatus(): Promise<boolean> {
  const cookieStore = await cookies();

  const sessionCookie = cookieStore.get("session")?.value;
  if (!sessionCookie) return false;

  try {
    const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);
    const userId = decodedClaims.uid;

    // Get user from database
    const userDoc = await db.collection("users").doc(userId).get();
    if (!userDoc.exists) return false;

    const userData = userDoc.data() as User;
    const trialTime = userData.subscription?.trialExpiration as Timestamp;

    // If no trial expiration date is set, nothing to update
    if (!trialTime) return false;

    const trialTimeDate = new Date(trialTime.toDate());
    const currentDate = new Date();
    const isExpired = currentDate > trialTimeDate;

    // Only update if trial has expired but flag hasn't been set yet
    if (isExpired && !userData.subscription?.isTrialExpired) {
      await db.collection("users").doc(userId).update({
        "subscription.isTrialExpired": true
      });
      return true; // Updated successfully
    }

    return false; // No update needed
  } catch (error) {
    console.error("Error updating trial status:", error);
    return false;
  }
}

export async function updateUserSubscription(params: UpdateUserInfo) {

  try {

    const userId = params.userId;

    // Get user from database
    const userDoc = await db.collection("users").doc(userId).get();
    if (!userDoc.exists) return;

    let isCancellationQueued = false;

    console.log("Event type: ", params.eventType);

    if (params.eventType === "subscription.updated") {
      isCancellationQueued = true;
    }

    if (params.eventType === "subscription.canceled") {
      isCancellationQueued = false;
    }

    await db.collection("users").doc(userId).update({
      "paddleCustomerId": params.paddleCustomerId,
      "subscription.plan": params.planName,
      "subscription.currentPeriodStart": params.currentPeriodStart,
      "subscription.currentPeriodEnd": params.currentPeriodEnd,
      "subscription.status": params.status,
      "subscription.paddleSubscriptionId": params.paddleSubscriptionId,
      "subscription.isCancellationQueued": isCancellationQueued
    });

    console.log("User Updated OK!");

  } catch (error) {
    console.error("Error updating trial status:", error);
  }
}

// Check if user is authenticated
export async function isAuthenticated() {
  const user = await getCurrentUser();
  return !!user;
}
