import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div className="w-full md:w-fit md:m-0 bg-gray-300/55 backdrop-blur-xl text-gray-800 p-6 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-md shadow-lg shadow-gray-500/50">
      <h1 className="text-center text-7xl md:text-9xl text-red-600 font-bold md:font-extrabold md:font-mono">
        404
      </h1>
      <p className="text-xl md:text-3xl text-center my-3 md:font-semibold italic">
        Oops! The page you're looking for doesn't exist.
      </p>
      <div className="flex justify-center">
        <Link
          to="/"
          className="bg-gray-200 hover:bg-blue-700 hover:text-gray-200 border-2 border-blue-600 text-blue-700 duration-300 outline-none py-2 px-4 my-4 font-semibold rounded-md capitalize text-sm md:text-lg">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};
