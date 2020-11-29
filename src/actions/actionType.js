export const LOADING = "LOADING";
export const LOGIN = "LOGIN";
export const ERROR = "ERROR";
export const SUCCESS = "SUCCESS";

export const loading = (user) => {
    return {
        type: LOADING,
        user
    };
};
export const login = (user) => {
    return {
        type: LOGIN,
        user
    };
};

export const success = (user, su) => {
    return {
        type: SUCCESS,
        user,
        su
    };
};

export const errors = (error) => {
    return {
        type: ERROR,
        error
    };
};
