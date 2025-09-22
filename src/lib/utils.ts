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

  // Get the element's position
  const elementTop = element.offsetTop;
  const elementPosition = elementTop - 100; // Offset for fixed header
  
  console.log('Scrolling to position:', elementPosition);

  // Use window.scrollTo for more reliable scrolling
  window.scrollTo({
    top: elementPosition,
    behavior: 'smooth'
  });

  // Also try scrollIntoView as backup
  setTimeout(() => {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }, 100);
}
