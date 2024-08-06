import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../components/layout/main";
import Homepage from "../pages/home";

const Routes = () => {
  const pageRoutes = [
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
      ],
    },
  ];
  const router = createBrowserRouter([...pageRoutes]);
  return <RouterProvider router={router} />;
};

export default Routes;
