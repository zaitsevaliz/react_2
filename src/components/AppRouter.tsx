import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { AboutWithConnect } from "../pages/About";
import { ChatPage } from "../pages/ChatPage";
import { Main } from "../pages/Main";
import { Profile } from "../pages/Profile";
import { ChatList } from "./ChatList";
import { Header } from "./header";

export const AppRouter = () => (
    <Routes>
        <Route path="/" element={<Header />}>
            <Route index element={<Main />} />
            <Route path="profile" element={<Profile />} />
            <Route path="about" element={<AboutWithConnect />} />
            <Route path="chats" >
                <Route index element={<ChatList />} />
                <Route path=":chatId" element={
                    <ChatPage />} />
            </Route>
        </Route>
        <Route path="*" element={<div> 404 page </div>} />
    </Routes>
);