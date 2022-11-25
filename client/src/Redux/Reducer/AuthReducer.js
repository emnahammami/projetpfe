import {
  GET_CURRENT,
  GET_USERS,
  LOGIN,
  LOGOUT,
  REGISTER,
} from "../Types/authTypes";

const initialState = {
  users: [],
  user: null,
  errors: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      localStorage.setItem("token", payload.token);

      return { ...state, user: payload.user };
    case LOGIN:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.user };
    case GET_CURRENT:
      return { ...state, user: payload };
    case GET_USERS:
      return { ...state, users: payload.userss };
    case LOGOUT:
      localStorage.removeItem("token");
      return { ...state, user: null };

    default:
      return state;
  }
};
export default reducer;
