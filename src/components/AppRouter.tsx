import { onValue, ref } from "firebase/database";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { AboutWithConnect } from "../pages/About";
import { Articles } from "../pages/Articles";
import { ChatPage } from "../pages/ChatPage";
import { Main } from "../pages/Main";
import { Profile } from "../pages/Profile";
import { SignIn } from "../pages/Signin";
import { SignUp } from "../pages/Signup";
import { db, firebaseAuth, getChats } from "../services/firebase";
import { auth } from "../store/profile/slice";
import { ChatList } from "./ChatList";
import { Header } from "./header";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter: FC = () => {
    const dispatch = useDispatch();
    const [chats, setChats] = useState<any[]>([]);
    const [messages, setMessages] = useState<any>({});
    useEffect(() => {
        const authUnsubcribe = firebaseAuth.onAuthStateChanged((user) => {
            dispatch(auth(!!user));
        });

        const chatsUnsubcribe = onValue(getChats(), (snapshot) => {
            const data = snapshot.val() || {};
            setChats([...Object.values(data)]);
        });
        const messagesUnsubcribe = onValue(ref(db, 'messages'), (snapshot) => {
            const data = snapshot.val() || {};
            setMessages(data);
        });
        return () => {
            authUnsubcribe();
            chatsUnsubcribe();
            messagesUnsubcribe();
        }
    }, [dispatch]);
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Main />} />
                <Route path="profile" element={<PrivateRoute component={<Profile />} />} />
                <Route path="about" element={<AboutWithConnect />} />
                <Route path="signin" element={<PublicRoute component={<SignIn />} />} />
                <Route path="signup" element={<PublicRoute component={<SignUp />} />} />
                <Route path="chats" element={<PrivateRoute />} >
                    <Route index element={<ChatList chats={chats} messages={messages} />} />
                    <Route path=":chatId"
                        element={<ChatPage chats={chats} messages={messages} />} />
                </Route>
                <Route path="articles" element={<Articles />} />
            </Route>
            <Route path="*" element={<div> 404 page </div>} />
        </Routes>
    )
};