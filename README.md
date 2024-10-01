# Recipe Finder App

This project is a recipe finder application built using **React**. The app allows users to search for recipes, view details of individual recipes, and manage a list of favorite recipes. The app interacts with the **Forkify API** for retrieving recipe data.

## Features

- **Search Recipes:** Users can search for recipes by keywords.
- **Recipe Details:** Click on any recipe to view detailed instructions and ingredients.
- **Favorite Recipes:** Add or remove recipes from the favorites list, which is stored in the browser's localStorage for persistence.
- **Error Handling:** Displays error messages when API requests fail.
- **Responsive Design:** The app is styled using Tailwind CSS and is mobile-friendly.

## Demo

Check out the live demo of the app:

[RecipeNest - Find and Favorite Your Best Recipes ](https://recipenest.netlify.app)

## Tech Stack

- **React**: For building the user interface.
- **React Router**: For navigation between different pages (home, favorites, and details).
- **Forkify API**: For fetching recipe data.
- **Tailwind CSS**: For styling the application.
- **LocalStorage**: Used to persist the user's favorite recipes.

## How to Use

1. **Search Recipes**: On the home page, enter a keyword and hit search. The app will display a list of recipes related to the search term.
2. **View Recipe Details**: Click on a recipe to navigate to the details page and view the full recipe.
3. **Add to Favorites**: On the recipe list or details page, click the "Add to Favorites" button to save the recipe to your favorites list.
4. **Remove from Favorites**: Click the "Remove from Favorites" button to remove a recipe from your favorites list.
