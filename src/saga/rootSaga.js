import { fork, call, put, takeLatest } from "redux-saga/effects";
import { errors, success, loading } from "../actions/actionType";
// import { loginRequest } from '../api'
import axios from "axios";

export default function* loginRequestFlow(user) {
    try {
        console.log("user", user)
        yield put(loading(user));
        yield call(() => axios.post("https://reqres.in/api/login", user.user));
        yield put(success(user));
    } catch (error) {
        yield put(errors(error));
    }
}
export function* loginRequestFinal() {
    yield takeLatest("LOGIN", loginRequestFlow);
}

export function* rootSaga() {
    yield fork(loginRequestFinal);
}