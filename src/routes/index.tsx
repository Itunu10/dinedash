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
import AdminDashboardLayout from "../components/layout/dashboard/admin";
import AdminDashboardAnalytics from "../dashboard/admin/analytics";
import AdminProductsPage from "../dashboard/admin/products";
import AdminAllCustomersPage from "../dashboard/admin/customers";
import AdminAllStaffPage from "../dashboard/admin/staffs";
import AdminOrdersPage from "../dashboard/admin/orders";
import AdminAllTransactionsPage from "../dashboard/admin/transactions";
import ProtectedRoute from "./protectedRoute";

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
      element: <ProtectedRoute />,
      children: [
        {
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
      ],
    },
  ];

  const adminRoutes = [
    {
      path: "admin",
      element: <ProtectedRoute />,
      children: [
        {
          element: <AdminDashboardLayout />,
          children: [
            {
              path: "analytics",
              element: <AdminDashboardAnalytics />,
            },
            {
              path: "",
              element: <AdminDashboardAnalytics />,
            },
            {
              path: "products",
              element: <AdminProductsPage />,
            },
            {
              path: "customers",
              element: <AdminAllCustomersPage />,
            },
            {
              path: "staff",
              element: <AdminAllStaffPage />,
            },
            {
              path: "order",
              element: <AdminOrdersPage />,
            },
            {
              path: "notifications",
              element: <NotificationsPage />,
            },
            {
              path: "transactions",
              element: <AdminAllTransactionsPage />,
            },
            {
              path: "profile",
              element: <ProfilePage />,
            },
          ],
        },
      ],
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
