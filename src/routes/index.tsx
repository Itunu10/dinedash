import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../components/layout/main";
import Homepage from "../pages/home";
import AuthLayout from "../components/layout/auth";
import Loginpage from "../pages/auth/login";
import Registerpage from "../pages/auth/register";
import DashboardLayout from "../components/layout/dashboard";
import Productpage from "../dashboard/client/product";
import OrderPage from "../dashboard/client/order";
import CartPage from "../dashboard/client/carts";
import NotificationsPage from "../dashboard/client/notifications";
import TransactionsPage from "../dashboard/client/transactions";
import EmailVerificationPage from "../pages/auth/verifyEmail";
import PasswordResetMangement from "../pages/auth/password";
import ProfilePage from "../dashboard/client/profile";

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
    {
      path: "",
      element: <AuthLayout />,
      children: [
        {
          path: "/login",
          element: <Loginpage />,
        },
        {
          path: "/register",
          element: <Registerpage />,
        },
        {
          path: "/verify-email",
          element: <EmailVerificationPage />,
        },
        {
          path: "/password",
          element: <PasswordResetMangement />,
        },
      ],
    },
  ];

  const dashboardRoutes = [
    {
      path: "dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "",
          element: <Productpage />,
        },
        {
          path: "products",
          element: <Productpage />,
        },
        {
          path: "order",
          element: <OrderPage />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
        {
          path: "notifications",
          element: <NotificationsPage />,
        },
        {
          path: "transactions",
          element: <TransactionsPage />,
        },
        {
          path: "profile",
          element: <ProfilePage />,
        },
      ],
    },
  ];
  const adminRoutes = [
    {
      path: "admin",
      element: <DashboardLayout />,
    },
  ];
  const router = createBrowserRouter([
    ...pageRoutes,
    ...adminRoutes,
    ...dashboardRoutes,
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
