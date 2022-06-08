
import { applyMiddleware, combineReducers, createStore } from 'redux'
import {addPostsReducer} from "./reducers/add-posts-reducer";
import logger from "redux-logger";
import {usersReducer} from "./reducers/users-reducer";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    addPosts: addPostsReducer,
    users: usersReducer
})
// непосредственно создаём store
export const store = createStore(rootReducer, applyMiddleware(logger));
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
