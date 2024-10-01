import useGlobalContext from "../contexts/GlobalContext";
import {RecipeItem} from "../components/RecipeItem";

export const Favorites = () => {
  const { favoritesList } = useGlobalContext();

  return (
    <div className="p-6 grid place-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-12 md:gap-5 lg:gap-8">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item, index) => (
          <RecipeItem key={index} item={item} />
        ))
      ) : (
        <p className="text-center text-yellow-500 mt-6 font-extrabold text-3xl lg:text-5xl col-span-4 uppercase">
          Your favorites list is empty!
        </p>
      )}
    </div>
  );
};
