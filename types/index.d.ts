interface Feedback {
  id: string;
  interviewId: string;
  totalScore: number;
  categoryScores: Array<{
    name: string;
    score: number;
    comment: string;
  }>;
  strengths: string[];
  areasForImprovement: string[];
  finalAssessment: string;
  createdAt: string;
}

interface Interview {
  id: string;
  role: string;
  level: string;
  questions: string[];
  techstack: string[];
  createdAt: string;
  userId: string;
  type: string;
  finalized: boolean;
}

interface CreateFeedbackParams {
  interviewId: string;
  userId: string;
  transcript: { role: string; content: string }[];
  feedbackId?: string;
}

// Define the available subscription plans
type SubscriptionPlan = 'free' | 'weekly' | 'monthly';

// Define potential subscription statuses
type SubscriptionStatus = 'active' | 'canceled' | 'past_due' | 'incomplete';

// Define potential payment statuses
type PaymentStatus = 'succeeded' | 'pending' | 'failed';

// Subscription details attached to each user
interface Subscription {
  plan: SubscriptionPlan;                    // "free", "weekly", or "monthly"
  stripeSubscriptionId?: string | null;      // Provided when the user opts for a paid plan
  status: SubscriptionStatus;                // Current status of the subscription
  currentPeriodStart?: Date | null;          // Start of the current billing period
  currentPeriodEnd?: Date | null;            // End of the current billing period
}

interface User {
  name: string;
  email: string;
  id: string;
  stripeCustomerId?: string | null;          // Set after initiating a Stripe subscription
  subscription: Subscription;                // Embedded subscription details
  createdAt: Date;
  updatedAt: Date;
}

// Payment model to track individual payment events or subscription charges
interface Payment {
  id: string;
  userId: string;                            // Reference to the associated user
  stripeSubscriptionId: string;              // The Stripe subscription ID
  plan: Exclude<SubscriptionPlan, 'free'>;     // Only "weekly" or "monthly" since "free" has no payment
  amount: number;                            // Payment amount in cents (e.g., 749 for $7.49)
  currency: string;                          // Currency code, e.g., "USD"
  status: PaymentStatus;                     // Payment status such as "succeeded", "pending", or "failed"
  transactionId: string;                     // Stripe transaction or charge ID
  createdAt: Date;
  updatedAt: Date;
}

interface InterviewCardProps {
  interviewId?: string;
  userId?: string;
  role: string;
  type: string;
  techstack: string[];
  createdAt?: string;
  level: string,
  isTemplate: boolean
}

interface AgentProps {
  userName: string;
  userId?: string;
  interviewId?: string;
  feedbackId?: string;
  type: "generate" | "interview";
  questions?: string[];
  isTemplate: string;
}

interface RouteParams {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string>>;
}

interface GetFeedbackByInterviewIdParams {
  interviewId: string;
  userId: string;
}

interface GetLatestInterviewsParams {
  userId: string;
  limit?: number;
}

interface SignInParams {
  email: string;
  idToken: string;
}

interface SignUpParams {
  uid: string;
  name: string;
  email: string;
  password: string;
}

type FormType = "sign-in" | "sign-up";

interface InterviewFormProps {
  interviewId: string;
  role: string;
  level: string;
  type: string;
  techstack: string[];
  amount: number;
}

interface TechIconProps {
  techStack: string[];
}
