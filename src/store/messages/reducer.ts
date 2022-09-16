import { Reducer } from "redux";
import { AUTHOR, Message, Messages } from "../../types";
import { ADD_CHAT, ADD_MESSAGE, DELETE_CHAT } from "./actions";
import { MessagesActions } from "./types";

const initialState: Messages = {
    first: [{ author: AUTHOR.AUTHOR, value: 'hello,world!' }],
    second: [{ author: AUTHOR.BOT, value: 'hello, im bot' }],
};
export const MessagesReducer: Reducer<Messages, MessagesActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ADD_CHAT: {
            return {
                ...state,
                [action.chatName]: [],
            };
        }
        case ADD_MESSAGE: {
            return {
                ...state,
                [action.chatName]: [...state[action.chatName], action.newMessage],
            };
        };
        case DELETE_CHAT: {
            const messages = { ...state };
            delete messages[action.chatName];
            return messages;
        };

        default:
            return state;
    }
};