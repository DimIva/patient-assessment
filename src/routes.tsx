import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AssessmentPage } from './pages/AssessmentPage';
import { SignIn } from './pages/SignIn'; // Import SignIn component
import { SignUp } from './pages/SignUp'; // Import SignUp component
import { PrivateRoute } from './pages/PrivateRoute';

// Create browser router with routes
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoute>
        <HomePage />
      </PrivateRoute>
    ),
  },
  {
    path: '/assessment',
    element: (
      <PrivateRoute> 
        <AssessmentPage />
      </PrivateRoute>
    ),
  },
  {
    path: '/sign-in', // Sign In page route
    element: <SignIn />,
  },
  {
    path: '/sign-up', // Sign Up page route
    element: <SignUp />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
