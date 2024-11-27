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
  // router contient en paramètre un tableau avec la liste des routes
  // object à afficher est path/avec l'element à afficher
  // pour eviter de repeter des parties de pages = app contient tout ce qui se repete et
  // outlet contient la partie qui va varier
  // dans la div id route dans le html on affiche la page voulue.
  //pour toutes les page du site afficher app et/ peut etre les children si besoin grâce à OUTLET
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
      //nouvelle route pour les favoris lea
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
  // dans quoi doit il afficher,va chercherl'element root (id) dans le index html pour crée une racine d' afficher, et render= afficher dedans l'element voulu= router provider
  // routeprovider il affiche les différentes routes du navigateur .
  //connait les routes grâce au router en props
  <StrictMode>
    <RouterProvider router={router} />
    {/* router provider contient object router */}
  </StrictMode>,
);
