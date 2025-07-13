// Utility function to get the correct image path for different environments
export const getImagePath = (imagePath) => {
  // If we're in development (localhost), use absolute paths
  if (process.env.NODE_ENV === 'development') {
    return `/${imagePath}`;
  }
  
  // If we're in production (GitHub Pages), use relative paths
  return imagePath;
}; 