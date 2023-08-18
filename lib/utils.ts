import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {POSITIVE} from './constants'
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isThePostPositive = (post: string) => {
return POSITIVE.includes(post);
}
