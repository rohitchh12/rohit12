import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Skills from "./pages/Skills.jsx";
import Project from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

const paths = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/*",
        element: <div> Page Not Found</div>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={paths}></RouterProvider>
);
