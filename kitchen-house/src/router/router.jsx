import { createBrowserRouter } from 'react-router-dom';

import HomePage from '../pages/home/HomePage';
import Root from '../root/Root';
import Login from '../pages/login/Login';
import Registration from '../components/registration/Registration';
import UploadItem from '../pages/uploadItem/UploadItem';
import PrivetRoute from '../privetRoute/PrivetRoute';
import FoodItems from '../components/foodItems/FoodItems';
import ErrorPage from '../pages/error/ErrorPage';

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
                path: '/food-items',
                element: <FoodItems />,
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
                element: (
                    <PrivetRoute>
                        <UploadItem />
                    </PrivetRoute>
                ),
            },
        ],
    },
]);

export default router;
