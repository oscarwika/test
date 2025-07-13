// Utility function to get the correct image path for different environments
export const getImagePath = (imagePath) => {
  // Use absolute paths starting with / for both development and production
  // This ensures images are served from the correct location
  return `/${imagePath}`;
}; 