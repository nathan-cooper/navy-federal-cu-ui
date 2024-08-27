import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import DevCenterHome from './pages/DevCenterHome';
import { PageContainer } from 'ncooper-ui';
import PageNotFound from './pages/PageNotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageContainer><Outlet /></PageContainer>,
    errorElement: <PageContainer><PageNotFound /></PageContainer>,
    children: [
      {
        path: "/",
        element: <DevCenterHome />,
        errorElement: <PageNotFound />,
      },
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
