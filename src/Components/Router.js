import { createBrowserRouter } from "react-router-dom"
import Services from "./Services"
import Portpolie from "./Portpolie"
import About from "./About"
import Home from "./Home"
import App from "../App"
import Contact from "./Contact"
let router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />

            }
            ,
            {
                path: "/services",
                element: <Services />

            },
            {
                path: "/portpolie",
                element: <Portpolie />

            },
            {
                path: "/contact",
                element: <Contact />

            }

        ]

    }

])
export default router;