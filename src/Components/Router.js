import { createBrowserRouter } from "react-router-dom"

import Portfolio from "./Portfolio"
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
                path: "/portfolio",
                element: <Portfolio />

            },
            {
                path: "/contact",
                element: <Contact />

            }

        ]

    }

])
export default router;