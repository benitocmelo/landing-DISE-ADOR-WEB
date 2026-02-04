export interface PricingPlan {
  name: string;
  price: number;
  description: string;
  features: string[];
  isRecommended?: boolean;
  platform: 'Shopify' | 'Vercel';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FeatureComparison {
  feature: string;
  shopify: string | boolean;
  landing: string | boolean;
}