import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import DevCenterHome from './pages/DevCenterHome';
import { PageContainer } from 'ncooper-ui';
import PageNotFound from './pages/PageNotFound';
import SignupPage from './pages/SignupPage';
import AccountAggregationApiPage from './pages/AccountAggregationApiPage';
import NfcuOfferingsPage from './pages/NfcuOfferingsPage';
import { DEV_CENTER_URLS } from './constants/url.constants';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageContainer><Outlet /></PageContainer>,
    errorElement: <PageContainer><PageNotFound /></PageContainer>,
    children: [
      {
        path: DEV_CENTER_URLS.HOME,
        element: <DevCenterHome />,
        errorElement: <PageNotFound />,
      }, {
        path: DEV_CENTER_URLS.SIGNUP,
        element: <SignupPage />,
        action: async ({ params, request }) => {
          const formData = Object.fromEntries(await request.formData());

          console.log(params, request, formData);
          const res = await fetch("http://backend/signup", { method: "POST", body: JSON.stringify(formData) });
          return res;
        }
      }, {
        path: DEV_CENTER_URLS.LOGIN,
        element: <LoginPage />,
        action: async ({ params, request }) => {
          const formData = Object.fromEntries(await request.formData());

          console.log(params, request, formData);
          const res = await fetch("http://backend/login", { method: "POST", body: JSON.stringify(formData) });
          return res;
        }
      }, {
        path: DEV_CENTER_URLS.ACCOUNT_AGGREGATION_API,
        element: <AccountAggregationApiPage />
      }
    ]
  }, {
    path: DEV_CENTER_URLS.NFCU_OFFERINGS,
    element: <PageContainer variant="internal"><Outlet /></PageContainer>,
    children: [
      {
        path: DEV_CENTER_URLS.NFCU_OFFERINGS,
        element: <NfcuOfferingsPage />
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
