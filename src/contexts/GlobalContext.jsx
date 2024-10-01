import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext(null);

export const GlobalContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);
  const [favoritesListLength, setFavoritesListLength] = useState(0);

  async function fetchRecipe(query) {
    setIsLoading(true); // Set loading to true when the request starts
    setError(null); // Clear previous error state before a new request
    setRecipeList([]); // Clear previous recipe list before a new search
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`
      );
      const result = await response.json();
      setRecipeList(result.data.recipes);
      setIsLoading(false);
      setSearchValue("");
    } catch (e) {
      setIsLoading(false);
      setError(e.message);
    }
  }

  // Fetch default recipes when the component mounts
  useEffect(() => {
    fetchRecipe("apple");
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    fetchRecipe(searchValue);
  }

  function handleAddToFavorites(currentItem) {
    // .some() is a built-in JavaScript array method. It checks whether at least one element
    // in the array passes a specified test. It returns a boolean value.
    const isFavorite = favoritesList.some((item) => item.id === currentItem.id);
    if (isFavorite) {
      // Remove the item from the favorites list
      setFavoritesList((prevList) =>
        prevList.filter((item) => item.id !== currentItem.id)
      );
    } else {
      // Add the item to the favorites list
      setFavoritesList((prevList) => [...prevList, currentItem]);
    }
  }

  // Load favorites list from localStorage on mount
  useEffect(() => {
    const storedItems = localStorage.getItem("Favorites");
    if (storedItems) {
      setFavoritesList(JSON.parse(storedItems));
    }
  }, []);

  // Save favorites list to localStorage when it changes
  useEffect(() => {
    if (favoritesList.length > 0) {
      localStorage.setItem("Favorites", JSON.stringify(favoritesList));
    }
    setFavoritesListLength(favoritesList.length);
  }, [favoritesList]);

  return (
    <GlobalContext.Provider
      value={{
        searchValue,
        setSearchValue,
        handleSubmit,
        error,
        isLoading,
        recipeList,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavorites,
        favoritesList,
        favoritesListLength,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default function useGlobalContext() {
  return useContext(GlobalContext);
}
