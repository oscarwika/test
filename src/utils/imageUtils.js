// Utility function to get the correct image path for different environments
export const getImagePath = (imagePath) => {
  // Use PUBLIC_URL for production (GitHub Pages) and empty string for development
  // This ensures images work in both environments
  const baseUrl = process.env.PUBLIC_URL || '';
  return `${baseUrl}/${imagePath}`;
}; 