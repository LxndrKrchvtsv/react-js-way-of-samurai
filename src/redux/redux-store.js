import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer.js";
import dialogsReducer from "./dialogs-reducer.js";
import sideBarReducer from "./sidebar-reducer.js";
import usersReducer from "./users-reducer.js";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	SideBar: sideBarReducer
});

let store = createStore(reducers);

window.store = store;

export default store;