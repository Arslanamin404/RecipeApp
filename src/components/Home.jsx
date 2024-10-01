import useGlobalContext from "../contexts/GlobalContext";
import { RecipeItem } from "./RecipeItem";

export const Home = () => {
  const { error, isLoading, recipeList } = useGlobalContext();
  if (isLoading)
    return (
      <p className="italic text-center py-10 text-2xl">
        Loading... Please wait!
      </p>
    );
  if (error)
    return (
      <p className="text-rose-500 text-center mx-4 my-12 text-2xl md:text-3xl lg:text-5xl">
        <span className="font-bold mr-2 uppercase text-rose-600">
          Error Occurred:
        </span>
        <span className="italic font-semibold text-red-600"> {error}</span>
      </p>
    );

  return (
    <div className="p-6 grid place-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-12 md:gap-5 lg:gap-8">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item, index) => <RecipeItem key={index} item={item} />)
      ) : (
        <p className="text-center text-yellow-500 font-extrabold text-2xl md:text-3xl lg:text-4xl">
          No food items found! Please try a different search.
        </p>
      )}
    </div>
  );
};
