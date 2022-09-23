import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { StoreState } from '../store/index';
interface PublicRouteProps {
    component?: JSX.Element;
}
export const PublicRoute: FC<PublicRouteProps> = ({ component }) => {
    const isAuth = useSelector((state: StoreState) => state.profile.isAuth);
    if (isAuth) {
        return <Navigate to="/" />;
    }
    return component ? component : <Outlet />
};