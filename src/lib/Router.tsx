import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import loadable from '@loadable/component';

const Home = loadable(() => import('@/pages/Home'));
const Language = loadable(() => import('@/pages/Language'));
const NoMatch = loadable(() => import('@/pages/NoMatch'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },

    {
        path: '/language',
        element: <Language />,
    },
    {
        path: '*',
        element: <NoMatch />,
    },
]);

function Router() {
    return <RouterProvider router={router} />;
}
export default Router;
