import { GET_USERS } from "../actionTypes/Type";

const initialState = {
  users: [],
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return { ...state, users: payload.users };
    default:
      return state;
  }
};
export default reducer;