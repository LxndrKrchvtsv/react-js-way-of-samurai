import {profileAPI, userAPI as usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'samurai-network/profile/ADD-POST';
const SET_USER_PROFILE = 'samurai-network/profile/SET_USER_PROFILE';
const SET_STATUS = 'samurai-network/profile/SET_STATUS';
const DELETE_POST = 'samurai-network/profile/DELETE_POST';
const SAVE_AVATAR_SUCCESS = 'samurai-network/profile/SAVE_AVATAR_SUCCESS';

let initialState = {
    PostData: [
        {id: 1, message: 'Do yourself way better!', like: 15},
        {id: 2, message: 'Let\'s go! NEVER GIVE UP', like: 2021}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.newPostBody,
                like: 0
            };
            return {
                ...state,
                PostData: [...state.PostData, newPost],
                newPostBody: ''
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case DELETE_POST: {
            return {...state, PostData: state.PostData.filter(p => p.id != action.postId)}
        }
        case SAVE_AVATAR_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state;
    }
    ;
};

export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const saveAvatarSuccess = (photos) => ({type: SAVE_AVATAR_SUCCESS, photos});

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(response.data));
};

export const updateUserStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
};

export const saveAvatar = (file) => async (dispatch) => {
    const response = await profileAPI.saveAvatar(file);
    if (response.data.resultCode === 0) {
        dispatch(saveAvatarSuccess(response.data.data.photos));
    }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        let messageError = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("editProfile", {_error: messageError}));
        return Promise.reject(response.data.messages[0]);
    }
};

export default profileReducer;