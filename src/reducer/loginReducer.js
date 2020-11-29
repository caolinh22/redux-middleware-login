import { SUCCESS, ERROR, LOADING } from '../actions/actionType'

const initialState = {
  user: {},
  loading: false,
  error: false,
  su: false
}
export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        su: false,
        error: false,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        su: false
      };
    case SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        su: true
      };
    default:
      return state;
  }
}




























