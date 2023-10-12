

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';
import Home from '../../blog-app/src/Pages/Home/Home';
import Navbar from '../../blog-app/src/Components/Navbar/Navbar';
import Footer from '../../blog-app/src/Components/Footer/Footer';
import Login from '../../blog-app/src/Pages/Login/Login';
import Post from './Pages/Post/Post';
import Add from './Pages/Add/Add'





const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/post/:id',
        element: <Post />
      },
      {
        path: '/add',
        element: <Add />
      }
    ]
  },
  {
    path: '/', 
    element: <Home />
  },
  {
    path: '/login', 
    element: <Login />,
  },
  
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
