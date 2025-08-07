// utils.ts
import {  clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges Tailwind classes conditionally and smartly.
 * Used across all components to apply utility classes.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
