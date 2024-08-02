// Importation des polices
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Importation des styles
import "styles/initial.css";
import "styles/swiper.css";
import "swiper/css/bundle";

import "react-toastify/dist/ReactToastify.css";

// Configuration de React
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "reducerToolkitStore/store/store";
import { router } from "routes/routes";

// Rendu de l'application
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
