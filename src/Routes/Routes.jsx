import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SIngUp from "../Pages/SingUp/SIngUp";
import CheakOut from "../Pages/CheakOut/CheakOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivetRoutes from "./PrivetRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>

        },
        {
          path:"login",
          element: <Login></Login>
        },
        {
          path:"singup",
          element: <SIngUp></SIngUp>
        },
        {
          path:"/checkout/:id",
          element: <PrivetRoutes>
            <CheakOut></CheakOut>
          </PrivetRoutes>,
          loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:"/bookings",
          element: <PrivetRoutes>
            <Bookings></Bookings>
          </PrivetRoutes>
        }
      ]
    },
  ]); 

  export default router