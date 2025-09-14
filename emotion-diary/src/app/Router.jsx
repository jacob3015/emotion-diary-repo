import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.jsx";
import NotFound from "../pages/NotFound.jsx";
import Home from "../pages/home/Home.jsx";
import Detail from "../pages/detail/Detail.jsx";
import Create from "../pages/create/Create.jsx";
import Update from "../pages/update/Update.jsx";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {index: true, element: <Home/>},
            {path: "/home", element: <Home/>},
            {path: "/new", element: <Create/>},
            {path: "/:id", element: <Detail/>},
            {path: "/:id/edit", element: <Update/>},
            {path: "*", element: <NotFound/>}
        ]
    }
]);