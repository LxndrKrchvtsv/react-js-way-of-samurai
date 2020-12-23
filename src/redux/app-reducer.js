import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'samurai-network/app/INITIALIZED_SUCCESS';
const GET_GLOBAL_ERROR = 'samurai-network/app/GET_GLOBAL_ERROR';
const SET_ERROR_NULL = 'samurai-network/app/SET_ERROR_NULL';

let initialState = {
    initialized: false,
    globalError: null
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
                globalError: action.promise
            }
        case GET_GLOBAL_ERROR:
            return {
                ...state,
                globalError: action.promise
            }
        case SET_ERROR_NULL:
            return {
                ...state,
                globalError: null
            }
        default:
            return state;
    }
};

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});
export const setGlobalError = (promise) => ({type: GET_GLOBAL_ERROR, promise});
export const setErrorNull = () => ({type: SET_ERROR_NULL});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        })
};

export const getGlobalError = (promise) => (dispatch) => {
    dispatch(setGlobalError(promise));
};

export const getErrorNull = () => (dispatch) => {
    dispatch(setErrorNull());
};

export default appReducer;