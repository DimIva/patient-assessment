import { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { User } from 'firebase/auth';

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<null | User>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                console.log('User is signed in:', user);
                setIsAuthenticated(true);
                setUser(user);
            } else {
                console.log('No user is signed in.');
                setIsAuthenticated(false);
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return { isAuthenticated, user };
};