import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/error/ErrorPage';
import HomePage from '../pages/home/HomePage';
import Root from '../root/Root';

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
        ],
    },
]);

export default router;
