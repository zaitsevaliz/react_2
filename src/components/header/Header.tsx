import React, { FC } from "react";
import '../../App.css';
import { Link, NavLink, Outlet } from "react-router-dom";
const navigate = [
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
];
export const Header: FC = () => {
    return <>
        <header className="header">
            <ul className="ul-nav">
                {navigate.map((item, idx) => (
                    <li key={idx}>
                        <NavLink to={item.path} style={({ isActive }) => ({ color: isActive ? 'black' : 'blue' })}>{item.name}</NavLink>
                    </li>
                ))}
            </ul>
        </header>
        <main>
            <Outlet />
        </main>
    </>;
}