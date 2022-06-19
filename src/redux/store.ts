
import { applyMiddleware, combineReducers, createStore } from 'redux'
import {addPostsReducer} from "./reducers/add-posts-reducer";
import logger from "redux-logger";
import {usersReducer} from "./reducers/users-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";
import {authReducer} from "./reducers/auth-reducer";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    addPosts: addPostsReducer,
    usersPage: usersReducer,
    auth: authReducer
})
// непосредственно создаём store
export const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export const useTypedDispatch = () => useDispatch<TypedDispatch>();
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
export type TypedDispatch = ThunkDispatch<AppRootStateType, any, any>;

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
