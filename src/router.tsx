import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Facts from "./pages/Facts";
import Recipes from "./pages/Recipes";
import NotFound from "./pages/NotFound";
import Beans from "./pages/Beans/beans";
import Combinations from "./pages/Combinations/combinations";
import History from "./pages/History";


const router = createBrowserRouter([
    {
        path : '*',
        element: <NotFound />,
    },
    {
        path : '/',
        element: <Home />,
    },
    {
        path : '/beans',
        element: <Beans />,
    },
    {
        path : '/facts',
        element: <Facts />,
    },
    {
        path : '/recipes',
        element: <Recipes />,
    },
    {
        path : '/combinations',
        element: <Combinations />,
    },
    {
        path : '/history',
        element: <History />,
    },
])

export default router;