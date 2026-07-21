import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Get_Tinpuste from "../pages/tinpusteget";
import { Put_Tinpuste } from "../pages/tinpusteput";
import { Delete_tinpuste } from "../pages/delete";
import { Update_tinpuste } from "../pages/update";
import { ReactHook } from "../pages/reactHook";
import { ReactHookformRevise } from "../pages/reactHookformRevise";
// import { Parent } from "../pages/parent";
import { ParentMovie } from "../pages/parentMovie";
import WaterBottlePage from "../pages/waterBottle";


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
  {
    path: "/hook",
    element: <ReactHook />,
  },
  {
    path: "/re",
    element: <ReactHookformRevise />,
  },
  {
    path: "/parent",
    element: <ParentMovie />,
  },
  {
    path:"/me",
    element:<WaterBottlePage/>
  },
]);

export const RouterConfig = () => {
  return <RouterProvider router={router} />;
};