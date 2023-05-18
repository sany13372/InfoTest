import {useMemo} from "react";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import HomePage from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import NotFoundPage from "../pages/NotFoundPage";

function Router() {
    const rooter = useMemo(() => {
        return createBrowserRouter(
            createRoutesFromElements(
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            )
        );
    }, []); // eslint-disable-line

    return <RouterProvider router={rooter}/>;
}

export default Router;
