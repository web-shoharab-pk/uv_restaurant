import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useLayoutEffect, useState } from "react";

export const useAuth = () => {
    const [currentUser, setCurrentUser] = useState();
    const [isUserLoading, setIsUserLoading] = useState(true)
    const auth = getAuth();


    useLayoutEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setIsUserLoading(false)
        });
        return unsubscribe;
    }, [auth]);

    return { currentUser, isUserLoading };
};