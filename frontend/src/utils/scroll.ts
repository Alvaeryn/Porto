// Helper function for smooth scroll
export const smoothScrollTo = (id: string) => {
  const element = document.querySelector(id) as HTMLElement | null;
  if (element) {
    const offsetTop = element.offsetTop - 80; // Offset for fixed navbar
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
};
