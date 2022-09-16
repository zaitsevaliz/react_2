import { createStore, compose, combineReducers } from 'redux';
import { MessagesReducer } from './messages/reducer';
import { profileReducer } from './profile/reducer';
export const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    profile: profileReducer,
    messages: MessagesReducer
})
export type StoreState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, composeEnhancers());