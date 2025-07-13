// Utility function to get the correct image path for different environments
export const getImagePath = (imagePath) => {
  // For images in the public folder, just return the path
  // React will handle the serving correctly in both dev and prod
  return imagePath;
}; 