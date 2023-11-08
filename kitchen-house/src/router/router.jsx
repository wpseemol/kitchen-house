import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/error/ErrorPage';
import HomePage from '../pages/home/HomePage';
import Root from '../root/Root';
import Login from '../pages/login/Login';
import Registration from '../components/registration/Registration';
import UploadItem from '../pages/uploadItem/UploadItem';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <Root />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/registration',
                element: <Registration />,
            },
            {
                path: '/upload-item',
                element: <UploadItem />,
            },
        ],
    },
]);

export default router;
