import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import App from "./App";
import CardDeck from "./components/CardGames";
import ChessBoard from "./components/ChessBoard";
import SchiffBrett from "./components/SchiffeVersenken";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Kartenspiele",
    element: <CardDeck />,
  },
  {
    path: "/Schachbrett",
    element: <ChessBoard />,
  },
  {
    path: "/SchiffeVersenken",
    element: <SchiffBrett />,
  }
  
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
