import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { StoreState } from "../../store";
import { auth } from "../../store/profile/slice";
const nav = [
    {
        name: 'Main',
        path: '/',
    },
    {
        name: 'Chats',
        path: '/chats',
    },
    {
        name: 'Profile',
        path: '/profile',
    },
    {
        name: 'About',
        path: '/about',
    },
    {
        name: 'Articles',
        path: '/articles',
    },
];
export const Header: FC = () => {
    const isAuth = useSelector((state: StoreState) => state.profile.isAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(auth(false));
        navigate('/signin');
    };
    const handleLogin = () => {
        navigate('signin');
    };
    return (
        <>
            <header className="header">
                <ul className="ul-nav">
                    {nav.map((item, idx) => (
                        <li key={idx}>
                            <NavLink to={item.path} style={({ isActive }) => ({ color: isActive ? 'black' : 'blue' })}>{item.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </header>
            <main>
                {isAuth ? (
                    <button onClick={handleLogout}>logout</button>
                ) : (
                    <button onClick={handleLogin}>login</button>
                )}


                <Outlet />
            </main>
        </>
    )
}