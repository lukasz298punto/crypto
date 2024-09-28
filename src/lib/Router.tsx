import { createHashRouter, RouterProvider } from 'react-router-dom';
import loadable from '@loadable/component';

const BaseLayout = loadable(() => import('@/layouts/Base'));
const Home = loadable(() => import('@/pages/Home'));
const Languages = loadable(() => import('@/pages/Languages'));
const StudyModes = loadable(() => import('@/pages/StudyModes'));
const Levels = loadable(() => import('@/pages/Levels'));
const NoMatch = loadable(() => import('@/pages/NoMatch'));

const router = createHashRouter([
    {
        path: '/',
        element: <BaseLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: 'languages', element: <Languages /> },
            { path: 'study-modes', element: <StudyModes /> },
            { path: 'levels', element: <Levels /> },
        ],
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
