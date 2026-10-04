// Single source of truth for pricing. The homepage section, the /pricing page,
// the GEO & AEO service page, their FAQs and all schema read from here, so a
// price or inclusion only ever needs changing in this file.

const gbp = (amount: number) => `£${amount}`;

const RESEARCH_AMOUNT = 395;
const PARTNERSHIP_AMOUNT = 350;

export interface PricingPackage {
  id: "research" | "partnership";
  name: string;
  price: string; // display string, e.g. "£395"
  amount: number; // numeric, used in schema
  billing: "one-time" | "monthly";
  cadence: string;
  description: string;
  features: string[];
  bestFor: string; // used on the /pricing page only
}

export const researchPackage: PricingPackage = {
  id: "research",
  name: "AI Search & Industry Visibility Research",
  price: gbp(RESEARCH_AMOUNT),
  amount: RESEARCH_AMOUNT,
  billing: "one-time",
  cadence: "one-time · delivered over 2–3 weeks",
  description:
    "Not a one-week snapshot. Credible measurement means testing the same prompts repeatedly over time, not grabbing one day's answers and calling it a baseline - we do genuine research into where your industry actually stands, not a quick audit.",
  features: [
    "Week 1: You and your industry - industry immersion - who's actually cited in this category, and why",
    "Repeated prompt testing across ChatGPT, Gemini, and AI Overviews - a dated, evidenced record, not a single check",
    "Full technical crawlability audit: schema, structured data, JS-rendering issues, keyword cannibalisation",
    "A human-written strategy report, specific to the research - not a generic checklist",
    "Full keyword audit and report - highlighting missed opportunities and what your competitors are getting right",
    "5 optimised, keyword-enriched articles, all written by a human, never AI - based on keyword research findings",
    "Helpful insights into blog categorisation, webpage content, and website internal linking structure",
  ],
  bestFor:
    "Businesses that want to know where they stand in AI search and Google, and what to fix first.",
};

export const partnershipPackage: PricingPackage = {
  id: "partnership",
  name: "Ongoing Visibility Partnership",
  price: gbp(PARTNERSHIP_AMOUNT),
  amount: PARTNERSHIP_AMOUNT,
  billing: "monthly",
  cadence: "per month · 3-month minimum",
  description:
    "AI search visibility moves slowly - compounding signals need time to show. This is continuous, cumulative research and implementation over a real minimum term, not a fixed monthly checklist repeated on a loop.",
  features: [
    "Ongoing prompt tracking, expanded as the industry landscape shifts",
    "Continued technical implementation as issues are found",
    "One piece of GEO/AEO content a month, informed by the ongoing research",
    "A quarterly deep-dive into the competitive landscape, not just a monthly status update",
  ],
  bestFor:
    "Businesses ready for ongoing implementation and tracking, usually after the research package.",
};

export const packages: PricingPackage[] = [researchPackage, partnershipPackage];
