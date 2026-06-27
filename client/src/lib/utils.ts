import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges class names using clsx for conditional logic and tailwind-merge
 * for resolving Tailwind CSS class conflicts.
 *
 * WHY: When combining Tailwind classes from multiple sources (props, defaults,
 * conditionals), later classes should override earlier ones for the same property.
 * tailwind-merge handles this intelligently (e.g., "p-2 p-4" → "p-4").
 *
 * EXAMPLE: cn("p-2 text-red-500", isActive && "p-4 text-blue-500")
 *   → "p-4 text-blue-500" when isActive is true
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });
}
