import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// scroll to element
export function scrollTo(element: Element | null) {
  if (!element) {
    console.warn('scrollTo: element is null');
    return;
  }

  console.log('scrollTo called for element:', element.id);

  // Cast to HTMLElement to access offsetTop
  const htmlElement = element as HTMLElement;
  const elementTop = htmlElement.offsetTop;
  
  // Calculate proper offset based on header height
  const header = document.querySelector('nav');
  const headerHeight = header ? header.offsetHeight : 100;
  const elementPosition = elementTop - headerHeight - 60; // Extra 60px for better spacing
  
  console.log('Scrolling to position:', elementPosition, 'Header height:', headerHeight);

  // Use window.scrollTo for more reliable scrolling
  window.scrollTo({
    top: Math.max(0, elementPosition), // Ensure we don't scroll to negative position
    behavior: 'smooth'
  });
}
