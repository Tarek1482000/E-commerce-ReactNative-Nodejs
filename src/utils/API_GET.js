export const API_GET = async API => {
  try {
    const response = await fetch(API);
    const data = await response.json();
    return data; // Return the fetched data
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error to handle it in the calling component
  }
};
