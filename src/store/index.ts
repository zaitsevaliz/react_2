import { combineReducers, applyMiddleware } from 'redux';
import { messagesReducer } from './messages/slice';
import { profileReducer } from './profile/slice';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { articlesReducer } from './articles/slice';
const rootReducer = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    articles: articlesReducer,
});
export type StoreState = ReturnType<typeof rootReducer>;
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    }),
    devTools: process.env.NODE_ENV !== 'production',
})
