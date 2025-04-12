import { interviewCovers, mappings, SUBSCRIPTION_STATUS_NAMES } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getCurrentUser, updateTrialStatus } from "./actions/auth.action";
import { Timestamp } from "firebase/firestore";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const techIconBaseURL = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const normalizeTechName = (tech: string) => {
  const key = tech.toLowerCase().replace(/\.js$/, "").replace(/\s+/g, "");
  return mappings[key as keyof typeof mappings];
};

const checkIconExists = async (url: string) => {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok; // Returns true if the icon exists
  } catch {
    return false;
  }
};

export const getTechLogos = async (techArray: string[]) => {
  const logoURLs = techArray.map((tech) => {
    const normalized = normalizeTechName(tech);
    return {
      tech,
      url: `${techIconBaseURL}/${normalized}/${normalized}-original.svg`,
    };
  });

  const results = await Promise.all(
    logoURLs.map(async ({ tech, url }) => ({
      tech,
      url: (await checkIconExists(url)) ? url : "/tech.svg",
    }))
  );

  return results;
};

export const getRandomInterviewCover = () => {
  const randomIndex = Math.floor(Math.random() * interviewCovers.length);
  return `/covers${interviewCovers[randomIndex]}`;
};

export const isTrialExpired = async () => {

  const user: User = await getCurrentUser();
  const trialTime = user.subscription?.trialExpiration;
  const isTrialExpired = user.subscription.isTrialExpired;

  const trialTimeDate = await (convertFirebaseTimestampToJSDate(trialTime))
  const currentDate = new Date()

  const isAfter = currentDate > trialTimeDate!;

  if (isAfter || isTrialExpired) {
    await updateTrialStatus()
    return true;
  }
  return false;

}

export const isAccessRevoked = async () => {

  const user: User = await getCurrentUser();
  const endPeriod = user?.subscription?.currentPeriodEnd;

  const accessEndTimeDate = await (convertFirebaseTimestampToJSDate(endPeriod!))
  const currentDate = new Date()
  const status = user?.subscription?.status;

  const isAfter = currentDate > accessEndTimeDate!;

  if (isAfter && (status === SUBSCRIPTION_STATUS_NAMES.CANCELLED)) {
    return true;
  }
  return false;

}


/**
 * Converts a Firebase Timestamp or a JavaScript Date (or undefined) to a JavaScript Date.
 *
 * @param date - A Firebase Timestamp, a Date, or undefined.
 * @returns A Promise that resolves to a JavaScript Date, or undefined if no valid date is provided.
 */
export async function convertFirebaseTimestampToJSDate(date?: Timestamp | Date): Promise<Date | undefined> {
  // Return undefined if the input is undefined or null.
  if (!date) return undefined;

  // If it's already a JavaScript Date, return it.
  if (date instanceof Date) {
    return date;
  }

  // For Firebase Timestamps, use the toDate() method to convert.
  return new Date(date.toDate());
}
