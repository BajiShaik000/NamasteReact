import React ,{lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import Contact from './components/Contact';
import Error from './components/Error';
import Cart from './components/Cart';
import Login from './components/Login';

const RestarauntMenu = lazy(() => import('./components/RestaurantMenu'));
const About = lazy(() => import('./components/About'));


const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet/>
            <Footer/>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<Suspense fallback={<h1>Loading</h1>}><About/></Suspense>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/cart',
                element:<Cart/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/restaurant/:resId',
                element:<Suspense fallback={<h1>Loading</h1>}><RestarauntMenu/></Suspense>
            }
        ],
        errorElement:<Error/>
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);