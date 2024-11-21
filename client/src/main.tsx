import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Country from "./components/Country";
import Result from "./components/RandomResult";
import About from "./pages/About.tsx";
import Home from "./pages/Home.tsx";
import PageIngredients from "./pages/PageIngredients.tsx";

//  Temporaire, il faudra mettre chaque page Ingredient, Country, Random et Category comme children une fois crées

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      //1) selctionner les enfants pour le outlet
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/RandomResult",
        element: <Result />,
      },
      {
        path: "/PageIngredients",
        element: <PageIngredients />,
      },
      {
        path: "/country",
        element: <Country />,
      },
    ],
  },
]);

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
