import { nanoid } from 'nanoid';
import { StoreState } from '../index';
export const selectMessages = (state: StoreState) => state.messages;
export const selectChats = (state: StoreState) => Object.keys(state.messages).map(chatName => ({
    id: nanoid(), name: chatName,
}));
