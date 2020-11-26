import { LOGIN, ERROR, SUCCESS } from './actionType'
import axios from 'axios';

export const login = () => {
    return {
        type: LOGIN
    }
}

export const success = (user, su) => {
    return {
        type: SUCCESS,
        user,
        su
    }
}

export const errors = error => {
    return {
        type: ERROR,
        error
    }
}

export default function loginRequest(user) {
    return (dispatch) => {
        dispatch(login())
        axios
            .post('https://reqres.in/api/login/', user)
            .then(res => {
                console.log("res:", res);
                dispatch(success(user))
            })
            .catch(error => { dispatch(errors(error)) })
    }
}


