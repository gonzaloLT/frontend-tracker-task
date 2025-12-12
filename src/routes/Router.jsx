import { createBrowserRouter } from 'react-router-dom';

//Vistas Públicas
import { HomePage } from "../pages/HomePage"; 
import { LoginPage } from '../pages/auth/LoginPage';
import { RegisterPage } from '../pages/auth/RegisterPage';

//Vistas Privadas
import { Dashboard } from '../pages/Dashboard';
import { ProjectsPage } from "../pages/projects/ProjectsPage";
import { ProjectPage } from "../pages/projects/ProjectPage";
import { EpicPage } from "../pages/epics/EpicPage";
import { StoryPage } from "../pages/stories/StoryPage";
import { StoriesPage } from "../pages/stories/StoriesPage";
import { Settings } from "../pages/Settings";

import { ProtectedRoute } from '../components/routes/ProtectedRoute';
import { PublicRoute } from '../components/routes/PublicRoute';

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <PublicRoute>
                <HomePage />
            </PublicRoute>
        ),
    },
    {
        path: "/login",
        element: (
            <PublicRoute>
                <LoginPage />
            </PublicRoute>
        )
    },
    {
        path: '/signup',
        element: (
            <PublicRoute>
                <RegisterPage />
            </PublicRoute>
        )
    },
    {
        path: '/',
        element: <ProtectedRoute />,
        children: [
            {
                path: '/home',
                element: <Dashboard />
            },
            {
                path: "/my-projects",
                element: <ProjectsPage />,
            },
            {
                path: "/my-projects/:projectId",
                element: <ProjectPage />,
            },
            {
                path: "/my-projects/:projectId/:epicId",
                element: <EpicPage />,
            },
            {
                path: "/my-projects/:projectId/:epicId/:storyId",
                element: <StoryPage />,
            },
            {
                path: "/my-stories",
                element: <StoriesPage />,
            },
            {
                path: "/settings",
                element: <Settings />,
            }
        ]
    }
]);

export default router;