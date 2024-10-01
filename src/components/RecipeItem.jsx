import { Link } from "react-router-dom";

export const RecipeItem = ({ item }) => {
  return (
    <div className="w-80 md:w-full container bg-gray-100 text-gray-700 rounded-lg shadow-md flex flex-col overflow-hidden">
      <div className="w-full flex flex-col justify-center items-center overflow-hidden">
        <img
          className="h-48 object-center block w-full hover:scale-110 duration-500"
          src={item.image_url}
          alt={item.title}
        />
      </div>
      <div className="px-4 py-3">
        <span className="text-sm font-semibold text-emerald-600">
          {item.publisher}
        </span>
        <h3 className="text-xl md:text-2xl capitalize font-bold text-gray-800">
          {item.title}
        </h3>
        <div className="mt-5 mb-2 flex items-center justify-center">
          <Link
            className="text-xs md:text-sm uppercase tracking-wider rounded-lg bg-gray-800 text-gray-200 px-4 py-2 md:px-6 md:py-2 text-center font-semibold border-2 border-gray-800  hover:bg-gray-200 hover:text-gray-800 duration-300 shadow-md shadow-gray-800/90 "
            to={`/recipe-item/${item.id}`}
          >
            Recipe Details
          </Link>
        </div>
      </div>
    </div>
  );
};
