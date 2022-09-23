import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { StoreState } from '../store/index';
interface PrivateRouteProps {
    component?: JSX.Element;
}
export const PrivateRoute: FC<PrivateRouteProps> = ({ component }) => {
    const isAuth = useSelector((state: StoreState) => state.profile.isAuth);
    if (!isAuth) {
        return <Navigate to="/signin" />;
    }
    return component ? component : <Outlet />
};