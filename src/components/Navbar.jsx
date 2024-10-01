import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useGlobalContext from "../contexts/GlobalContext";

export const Navbar = () => {
  const { searchValue, setSearchValue, handleSubmit, favoritesListLength } =
    useGlobalContext();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    handleSubmit(e);
    navigate("/")
  };
  return (
    <>
      <nav className="w-full flex md:items-center justify-between  bg-gray-300 pl-3 pr-8 md:px-10 md:py-4 py-3 text-gray-800">
        <Link to="/" className="text-xl md:text-3xl font-bold">
          FoodRecipe
        </Link>
        <ul className="flex justify-center items-center gap-5 md:gap-8 text-sm md:text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-semibold ${
                  isActive ? "text-blue-700" : "text-gray-800"
                } hover:text-orange-600 hover:underline duration-300`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `font-semibold ${
                  isActive ? "text-blue-700" : "text-gray-800"
                } hover:text-orange-600 hover:underline duration-300`
              }
            >
              Favorites
            </NavLink>
            <span className="bg-red-600 text-white font-semibold rounded-full absolute top-2 right-3 md:top-4 md:right-5 px-[6px] text-center py-[1px] text-xs">
              {favoritesListLength}
            </span>
          </li>
        </ul>
      </nav>
      <form className="w-full flex justify-center my-6" onSubmit={handleSearch}>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Enter items..."
          name="search"
          id="search"
          className="px-6 py-1 md:px-8 md:py-2 md:w-96 outline-none rounded-full border-none bg-gray-200 text-gray-700 shadow-md shadow-red-200/60 focus:shadow-red-300"
        />
      </form>
    </>
  );
};
