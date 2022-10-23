import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Register from "./pages/Register";
import Login from "./pages/Login";
import './style.scss'
import Profile from "./pages/Profile";


const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/post/:id/',
        element: <Single/>
      },
      {
        path:'/write',
        element: <Write/>
      },
    
    ]
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/register',
    element: <Register/>
  },
  {
    path:'/profile',
    element: <Profile/>
  },
 
 
]); 

function App() {
  return (
    <div className="app">
        <div className="container">
        <RouterProvider router={router}/>
        </div>
    </div>
  );
}



export default App;
