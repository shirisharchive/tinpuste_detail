import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Get_Tinpuste from "../pages/tinpusteget";
import { Put_Tinpuste } from "../pages/tinpusteput";
import { Delete_tinpuste } from "../pages/delete";
import { Update_tinpuste } from "../pages/update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Get_Tinpuste />,
  },
  {
    path: "/put",
    element: <Put_Tinpuste />,
  },
  {
    path: "/delete",
    element: <Delete_tinpuste />,
  },
  {
    path: "/update",
    element: <Update_tinpuste />,
  },
]);

export const RouterConfig = () => {
  return <RouterProvider router={router} />;
};