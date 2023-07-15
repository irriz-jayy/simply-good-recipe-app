const BASE_URL = "http://localhost:3000";

export const fetchRecipes = async () => {
  try {
    const response = await fetch(`${BASE_URL}/recipes`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};
