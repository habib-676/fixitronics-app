import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/authPages/Login";
import Register from "../pages/authPages/Register";
import PrivateRouter from "./PrivateRouter";
import AddService from "../pages/service-pages/AddService";
import Loading from "../components/Loading";
import AllServices from "../pages/service-pages/AllServices";
import ServiceDetails from "../pages/service-pages/ServiceDetails";
import ManageServices from "../pages/service-pages/manage-services/ManageServices";
import BookedService from "../pages/service-pages/booked-service/BookedService";
import ToDoServices from "../pages/service-pages/service-to-do/ToDoServices";
import ErrorPage from "../pages/error-page/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
        hydrateFallbackElement: <Loading />,
        loader: () =>
          fetch(`${import.meta.env.VITE_hostUrl}/allServices/popular`),
      },
      {
        path: "add-service",
        element: (
          <PrivateRouter>
            <AddService></AddService>
          </PrivateRouter>
        ),
      },
      {
        path: "manage-services",
        element: (
          <PrivateRouter>
            <ManageServices />
          </PrivateRouter>
        ),
      },
      {
        path: "booked-service",
        element: (
          <PrivateRouter>
            <BookedService />
          </PrivateRouter>
        ),
      },
      {
        path: "services",
        Component: AllServices,
        loader: () =>
          fetch(`${import.meta.env.VITE_hostUrl}/allServices-public`),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "services/:id",
        errorElement: <ErrorPage></ErrorPage>,
        element: (
          <PrivateRouter>
            <ServiceDetails />
          </PrivateRouter>
        ),
        hydrateFallbackElement: <Loading />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_hostUrl}/services/${params.id}`),
      },
      {
        path: "service-to-do",
        element: (
          <PrivateRouter>
            <ToDoServices />
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      {
        path: "sign-in",
        Component: Login,
      },
      {
        path: "sign-up",
        Component: Register,
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

export default router;
