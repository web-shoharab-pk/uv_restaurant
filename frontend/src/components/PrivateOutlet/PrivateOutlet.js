import { Outlet } from "react-router-dom";
import Sign from "../../pages/Sign";
import { useAuth } from "../../utils/useAuth";
import HomeLoader from "../Loader/HomeLoader";


const ProtectedRoutes = () => {
    const { currentUser, isUserLoading } = useAuth();

    return isUserLoading ? <HomeLoader /> : currentUser ? <Outlet /> : <Sign />;
};

export default ProtectedRoutes;