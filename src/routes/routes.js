import Dashboard from "../layout/Dashboard/Dashboard";
import About from "../views/About";
import Cart from "../views/Cart";
import AddProduct from "../views/dashboard/AddProduct";
import Home from "../views/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "about",
            element: <About />
        },
        {
            path: "cart",
            element: <Cart />
        }
      ],
    },
    {
      path: "dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "add-product",
          element: <AddProduct />
        }
      ]
    }
  ]);
export default router; 