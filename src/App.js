import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router"
import Header from "./components/Header"
import About from "./components/About"
import Contacts from "./components/Contacts"
import Skills from "./components/Skills"

const AppLayout = () => {
    
    return (
        
        
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contacts",
                element: <Contacts />
            },
            {
                path: "/skills",
                element: <Skills />
            }
        ],
        
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contacts",
        element: <Contacts/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)