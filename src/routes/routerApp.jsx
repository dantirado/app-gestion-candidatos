import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import App from '../app'


export let routerapp = [
    
    {
        path: "/",
        element: <App />
    },
    {
        path: "/login",
        element: <Login />   
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    }
]