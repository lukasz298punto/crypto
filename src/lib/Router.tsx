import { createHashRouter, RouterProvider } from 'react-router-dom';
import loadable from '@loadable/component';

const BaseLayout = loadable(() => import('@/layouts/Base'));
const Home = loadable(() => import('@/pages/Home'));
const Languages = loadable(() => import('@/pages/Languages'));
const Categories = loadable(() => import('@/pages/Categories'));
const StudyModes = loadable(() => import('@/pages/StudyModes'));
const Levels = loadable(() => import('@/pages/Levels'));
const Flashcards = loadable(() => import('@/pages/Flashcards'));
const Speaking = loadable(() => import('@/pages/Speaking'));
const Writing = loadable(() => import('@/pages/Writing'));
const LanguageDirections = loadable(() => import('@/pages/LanguageDirections'));

const NoMatch = loadable(() => import('@/pages/NoMatch'));

const router = createHashRouter([
    {
        path: '/',
        element: <BaseLayout />,
        children: [
            { path: '', element: <Home /> },
            { path: 'languages', element: <Languages /> },
            { path: 'categories', element: <Categories /> },
            {
                path: ':categoryId',
                children: [
                    {
                        path: '',
                        element: <LanguageDirections />,
                    },
                    {
                        path: ':languageDirectionId',
                        children: [
                            {
                                path: '',
                                element: <StudyModes />,
                            },
                            {
                                path: 'flashcards',
                                children: [
                                    {
                                        path: '',
                                        element: <Flashcards />,
                                    },
                                ],
                            },
                            {
                                path: 'speaking',
                                children: [
                                    {
                                        path: '',
                                        element: <Speaking />,
                                    },
                                    {
                                        path: ':wordId',
                                        element: <Speaking />,
                                    },
                                ],
                            },
                            {
                                path: 'writing',
                                children: [
                                    {
                                        path: '',
                                        element: <Writing />,
                                    },
                                    {
                                        path: ':wordId',
                                        element: <Writing />,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },

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
