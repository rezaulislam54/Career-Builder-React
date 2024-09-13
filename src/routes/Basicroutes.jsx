import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layoutes/MainLayout";
import Homepage from "../pages/Homepage";


const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:([
            {
                path:"/",
                element:<Homepage></Homepage>,
            },
            {
                path:"/"
            }
        ])
    }
])

export default router