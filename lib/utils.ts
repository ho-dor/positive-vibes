import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import vader from "vader-sentiment";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isThePostPositive = (post: string) => {
  const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(post);
  return intensity.compound >= -0.05;
}
