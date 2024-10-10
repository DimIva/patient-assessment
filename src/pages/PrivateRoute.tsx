// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';

// export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
//   const { isAuthenticated, user } = useAuth(); // Get authentication status from the useAuth hook
//   console.log('auth', isAuthenticated, user);

//   // If the user is not authenticated, redirect to the sign-in page
//   if (!isAuthenticated) {
//     return <Navigate to="/sign-in" replace />;
//   }

//   // If authenticated, render the child components
//   return children;
// };

import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};
