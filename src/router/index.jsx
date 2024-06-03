import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../views/RootLayout.jsx";
import ErrorPage from "../views/ErrorPage.jsx";
import Editor from "../views/Editor.jsx";
import NoContent from "../views/NoContent.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "editor",
        element: <Editor />,
      },
      {
        path: "competitions",
        element: <NoContent />,
      },
      {
        path: "datasets",
        element: <NoContent />,
      },
      {
        path: "models",
        element: <NoContent />,
      },
    ],
  },
]);

export default router;
