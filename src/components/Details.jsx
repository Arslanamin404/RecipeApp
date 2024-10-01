import { useParams } from "react-router-dom";
import useGlobalContext from "../contexts/GlobalContext";
import { useEffect } from "react";

export const Details = () => {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleAddToFavorites,
    favoritesList,
  } = useGlobalContext();

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const result = await response.json();
      setRecipeDetailsData(result.data.recipe);
    }
    getRecipeDetails();
  }, []);
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 w-full md:mx-auto mt-5 py-5 text-gray-300 overflow-hidden">
      <div className="md:h-96 overflow-hidden rounded-xl md:ml-10">
        <img
          className="h-full w-full object-cover hover:scale-105 duration-300"
          src={recipeDetailsData.image_url}
          alt={recipeDetailsData.title}
        />
      </div>

      <div className="flex flex-col gap-3 mx-5 ml-5 lg:mx-0">
        <span className="text-emerald-300 italic font-semibold text-sm">
          {recipeDetailsData.publisher}
        </span>
        <h3 className="text-lg md:text-2xl capitalize font-bold ">
          {recipeDetailsData.title}
        </h3>
        <div className="flex items-center justify-start">
          <button
            onClick={() => handleAddToFavorites(recipeDetailsData)}
            className="text-xs md:text-sm uppercase tracking-wider rounded-lg bg-green-700 text-gray-200 px-3 py-2 md:px-6 md:py-2 text-center font-semibold border-2 border-green-800 outline-none hover:bg-gray-200 hover:text-green-800 duration-300 shadow-md shadow-gray-800/90 "
          >
            {favoritesList.findIndex(
              (item) => item.id === recipeDetailsData.id
            ) !== -1
              ? "Remove From Favorites"
              : "Add To Favorites"}
          </button>
        </div>
        <div>
          <span className="text-base md:text-2xl font-semibold uppercase">
            Ingredients
          </span>
          <ul className="flex flex-col gap-3">
            {recipeDetailsData.ingredients?.map((ingredient, index) => (
              <li key={index}>
                <span className="mr-1">{ingredient.quantity}</span>
                <span className="mr-1">{ingredient.unit}</span>
                <span>{ingredient.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
