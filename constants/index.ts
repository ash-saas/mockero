import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { z } from "zod";

export const mappings = {
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  firebase: "firebase",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  digitalocean: "digitalocean",
  heroku: "heroku",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  sass: "sass",
  scss: "sass",
  less: "less",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  jquery: "jquery",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  nestjs: "nestjs",
  graphql: "graphql",
  "graph ql": "graphql",
  apollo: "apollo",
  webpack: "webpack",
  babel: "babel",
  "rollup.js": "rollup",
  rollupjs: "rollup",
  rollup: "rollup",
  "parcel.js": "parcel",
  parceljs: "parcel",
  npm: "npm",
  yarn: "yarn",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  figma: "figma",
  prisma: "prisma",
  redux: "redux",
  flux: "flux",
  redis: "redis",
  selenium: "selenium",
  cypress: "cypress",
  jest: "jest",
  mocha: "mocha",
  chai: "chai",
  karma: "karma",
  vuex: "vuex",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",
  strapi: "strapi",
  wordpress: "wordpress",
  contentful: "contentful",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",
};

export const PRICING_PLAN_NAMES = {
  TRIAL: "trial",
  WEEKLY_PLAN: "weekly",
  MONTHLY_PLAN: "monthly",
  MAX_LIMIT: 3
}

export const interviewer: CreateAssistantDTO = {
  name: "Interviewer",
  firstMessage:
    "Hello! Thank you for taking the time to speak with me today. I'm excited to learn more about you and your experience.",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en",
  },
  voice: {
    provider: "11labs",
    voiceId: "sarah",
    stability: 0.4,
    similarityBoost: 0.8,
    speed: 0.9,
    style: 0.5,
    useSpeakerBoost: true,
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a professional job interviewer conducting a real-time voice interview with a candidate. Your goal is to assess their qualifications, motivation, and fit for the role.

Interview Guidelines:
Follow the structured question flow:
{{questions}}

Engage naturally & react appropriately:
Listen actively to responses and acknowledge them before moving forward.
Ask brief follow-up questions if a response is vague or requires more detail.
Keep the conversation flowing smoothly while maintaining control.
Be professional, yet warm and welcoming:

Use official yet friendly language.
Keep responses concise and to the point (like in a real voice interview).
Avoid robotic phrasing—sound natural and conversational.
Answer the candidate’s questions professionally:

If asked about the role, company, or expectations, provide a clear and relevant answer.
If unsure, redirect the candidate to HR for more details.

Conclude the interview properly:
Thank the candidate for their time.
Inform them that the company will reach out soon with feedback.
End the conversation on a polite and positive note.


- Be sure to be professional and polite.
- Keep all your responses short and simple. Use official language, but be kind and welcoming.
- This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
      },
    ],
  },
};

export const feedbackSchema = z.object({
  totalScore: z.number(),
  categoryScores: z.tuple([
    z.object({
      name: z.literal("Communication Skills"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Technical Knowledge"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Problem Solving"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Cultural Fit"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Confidence and Clarity"),
      score: z.number(),
      comment: z.string(),
    }),
  ]),
  strengths: z.array(z.string()),
  areasForImprovement: z.array(z.string()),
  finalAssessment: z.string(),
});

export const interviewCovers = [
  "/adobe.png",
  "/amazon.png",
  "/facebook.png",
  "/hostinger.png",
  "/pinterest.png",
  "/quora.png",
  "/reddit.png",
  "/skype.png",
  "/spotify.png",
  "/telegram.png",
  "/tiktok.png",
  "/yahoo.png",
];

export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "NextJS Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: [
      "What is React and how does it differ from vanilla JavaScript?",
      "Explain the benefits of using TypeScript in a Next.js project",
      "How does Next.js handle server-side rendering?",
      "Describe the purpose of getStaticProps in Next.js",
      "How would you implement responsive design with Tailwind CSS?"
    ],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z"
  },
  {
    id: "2",
    userId: "user1",
    role: "Node.js Backend Developer",
    type: "Technical",
    techstack: ["Node.js", "Express", "MongoDB", "REST APIs"],
    level: "Mid-Level",
    questions: [
      "Explain the event loop in Node.js",
      "How would you handle authentication in an Express API?",
      "Compare Mongoose ORM with native MongoDB driver",
      "Describe your approach to error handling in async/await functions",
      "How would you optimize MongoDB queries for performance?",
      "Explain the difference between process.nextTick() and setImmediate()"
    ],
    finalized: false,
    createdAt: "2024-03-16T11:30:00Z"
  },
  {
    id: "3",
    userId: "user1",
    role: "UI/UX Designer",
    type: "Design",
    techstack: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    level: "Senior",
    questions: [
      "Walk us through your design process from concept to handoff",
      "How do you ensure accessibility in your designs?",
      "Describe a time you had to defend your design decisions to stakeholders",
      "How do you conduct user research and implement findings?",
      "Compare Figma's collaborative features with Adobe XD",
      "What metrics do you use to measure design success?",
      "How do you handle design system versioning?"
    ],
    finalized: false,
    createdAt: "2024-03-17T09:15:00Z"
  },
  {
    id: "4",
    userId: "user1",
    role: "Sales Executive",
    type: "Business",
    techstack: ["CRM", "Negotiation", "Lead Generation", "Salesforce"],
    level: "Mid-Level",
    questions: [
      "Describe your approach to cold outreach",
      "How do you handle price objections?",
      "Explain your CRM management process",
      "Share an example of a complex deal you closed",
      "How do you prioritize leads in a high-volume pipeline?",
      "What strategies do you use for upselling existing clients?"
    ],
    finalized: false,
    createdAt: "2024-03-18T14:00:00Z"
  },
  {
    id: "5",
    userId: "user1",
    role: "Social Media Manager",
    type: "Marketing",
    techstack: ["Content Creation", "Analytics", "SEO", "Community Management"],
    level: "Mid-Level",
    questions: [
      "How would design a viral TikTok campaign?",
      "What metrics do you prioritize in social analytics?",
      "Describe your approach to crisis communication",
      "How do you stay updated with algorithm changes?",
      "Share an example of a successful influencer collaboration"
    ],
    finalized: false,
    createdAt: "2024-03-20T09:00:00Z"
  },
  {
    id: "6",
    userId: "user1",
    role: "Financial Analyst",
    type: "Finance",
    techstack: ["Financial Modeling", "Excel", "Data Visualization"],
    level: "Mid-Level",
    questions: [
      "Walk us through building a DCF model",
      "How do you validate forecast assumptions?",
      "Explain variance analysis techniques",
      "Describe your experience with Power BI",
      "How would you present complex data to non-financial stakeholders?"
    ],
    finalized: false,
    createdAt: "2024-03-23T12:45:00Z"
  },
  {
    id: "7",
    userId: "user1",
    role: "Customer Success Manager",
    type: "Client Services",
    techstack: ["CRM", "Onboarding", "Retention Strategies"],
    level: "Senior",
    questions: [
      "How do you identify expansion opportunities?",
      "Describe a challenging renewal negotiation",
      "What's your approach to creating customer health scores?",
      "How do you handle at-risk accounts?",
      "Share your experience with customer journey mapping"
    ],
    finalized: false,
    createdAt: "2024-03-24T13:00:00Z"
  },
  {
    id: "8",
    userId: "user1",
    role: "Digital Marketing Specialist",
    type: "Marketing",
    techstack: ["SEO", "PPC", "Conversion Rate Optimization"],
    level: "Mid-Level",
    questions: [
      "How do you structure an A/B testing framework?",
      "Describe your experience with GA4 migration",
      "What's your approach to keyword clustering?",
      "How do you optimize Quality Scores in Google Ads?",
      "Share your strategy for remarketing campaigns"
    ],
    finalized: false,
    createdAt: "2024-04-02T22:15:00Z"
  },
  {
    id: "9",
    userId: "user1",
    role: "Mechanical Engineer",
    type: "Technical",
    techstack: ["SolidWorks", "Thermodynamics", "Material Science", "CAD"],
    level: "Junior",
    questions: [
      "Explain the difference between stress and strain in materials.",
      "How do you approach designing a component for manufacturability?",
      "Describe your experience with SolidWorks or similar CAD tools.",
      "What factors do you consider when selecting materials for a design?",
      "How would you optimize a design for energy efficiency?"
    ],
    finalized: false,
    createdAt: "2024-04-19T09:00:00Z"
  },
  {
    id: "10",
    userId: "user1",
    role: "Agile Project Manager",
    type: "Management",
    techstack: ["Scrum", "Jira", "Risk Management", "Stakeholder Communication"],
    level: "Senior",
    questions: [
      "How do you handle scope creep in agile projects?",
      "Describe your approach to sprint retrospective facilitation",
      "What metrics do you use to predict project completion dates?",
      "How do you manage conflicting priorities among stakeholders?",
      "Share an example of implementing process improvements from retrospective insights"
    ],
    finalized: false,
    createdAt: "2024-04-09T14:00:00Z"
  },
  {
    id: "11",
    userId: "user1",
    role: "Data Analyst",
    type: "Technical",
    techstack: ["Excel", "SQL", "Power BI", "Data Visualization"],
    level: "Junior",
    questions: [
      "How do you clean and preprocess raw data?",
      "Describe your experience with SQL queries.",
      "What is your approach to creating dashboards in Power BI?",
      "How do you identify trends in large datasets?",
      "Explain the importance of data visualization in decision-making."
    ],
    finalized: false,
    createdAt: "2024-04-21T11:30:00Z"
  },
  {
    id: "12",
    userId: "user1",
    role: "DevOps Engineer",
    type: "Technical",
    techstack: ["AWS", "Terraform", "Kubernetes", "Monitoring"],
    level: "Mid-Level",
    questions: [
      "Explain your CI/CD pipeline implementation process",
      "How do you manage secrets in cloud environments?",
      "Describe your approach to auto-scaling solutions",
      "What's your experience with infrastructure-as-code testing?",
      "How do you troubleshoot distributed system failures?"
    ],
    finalized: false,
    createdAt: "2024-04-12T17:45:00Z"
  },
  {
    id: "13",
    userId: "user1",
    role: "Civil Engineer",
    type: "Technical Leadership",
    techstack: ["Project Management", "Regulatory Compliance", "Advanced BIM", "Risk Assessment"],
    level: "Senior",
    questions: [
      "Describe your strategy for managing seismic design requirements in high-risk zones[1][7]",
      "How do you balance sustainability goals with budget constraints?[1][7]",
      "Explain your process for conducting structural integrity assessments[1][5]",
      "What methods do you use to mentor junior engineers?[2][5]",
      "How would you handle a client demanding unsafe design modifications?[6][7]"
    ],
    finalized: false,
    createdAt: "2024-04-15T10:15:00Z"
  },
  {
    id: "14",
    userId: "user1",
    role: "Civil Construction Manager",
    type: "Management",
    techstack: ["Primavera", "Cost Control", "Stakeholder Management", "Quality Assurance"],
    level: "Senior",
    questions: [
      "How do you mitigate delays from permit approval bottlenecks?[1][5]",
      "Describe your strategy for conflict resolution between contractors[6][7]",
      "What metrics do you track for megaproject performance?[5][7]",
      "How do you enforce safety protocols across subcontractors?[1][7]",
      "Explain your approach to value engineering without compromising integrity[3][7]"
    ],
    finalized: false,
    createdAt: "2024-04-17T12:45:00Z"
  },
  {
    id: "15",
    userId: "user1",
    role: "Junior HR Coordinator",
    type: "Human Resources",
    techstack: ["Recruitment", "Employee Onboarding", "HRIS", "Compliance"],
    level: "Junior",
    questions: [
      "How would you handle a conflict between team members?",
      "Describe your approach to scheduling interviews for multiple roles",
      "What metrics do you track in recruitment pipelines?",
      "How do you ensure confidentiality in sensitive HR matters?",
      "Explain the importance of employer branding in recruitment"
    ],
    finalized: false,
    createdAt: "2024-04-26T16:45:00Z"
  }
];
