import { combineReducers, applyMiddleware } from 'redux';
import { messagesReducer } from './messages/slice';
import { profileReducer } from './profile/slice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['profile'],

}
const rootReducer = combineReducers({
    profile: profileReducer,
    messages: messagesReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export type StoreState = ReturnType<typeof rootReducer>;
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    }),
    devTools: process.env.NODE_ENV !== 'production',
})
export const persistor = persistStore(store);