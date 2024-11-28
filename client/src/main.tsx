import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About.tsx";
import Favorites from "./pages/Favorites.tsx";
import Home from "./pages/Home.tsx";
import PreferedChoice from "./pages/PreferedChoice.tsx";
import RandomResult from "./pages/RandomResult.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/RandomResult",
        element: <RandomResult />,
      },
      {
        path: "/PreferedChoice/:type",
        element: <PreferedChoice />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
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
