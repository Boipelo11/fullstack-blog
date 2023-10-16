

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';
import Home from '../../blog-app/src/Pages/Home/Home';
import Navbar from '../../blog-app/src/Components/Navbar/Navbar';
import Footer from '../../blog-app/src/Components/Footer/Footer';
import Login from '../../blog-app/src/Pages/Login/Login';
import Register from '../../blog-app/src/Pages/Register/Register';
import Post from './Pages/Post/Post';
import Add from './Pages/Add/Add';

// Layout for home, add post, and post pages to have both navbar and footer
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
        path: '', // This matches the root path after the Layout
        element: <Home />,
      },
      {
        path: 'post/:id', // Nested route for post detail
        element: <Post />,
      },
      {
        path: 'add',
        element: <Add />,
      },
    ],
  },
  {
    path: 'login', // Moved login route to the top level
    element: <Login />,
  },
  {
    path: 'register', // Moved register route to the top level
    element: <Register />,
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
