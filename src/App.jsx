import { RouterProvider } from "react-router-dom";

import router from "./routes";
function App() {
  return (
    <div className="min-h-screen bg-gray-800 text-gray-300 text-lg">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
