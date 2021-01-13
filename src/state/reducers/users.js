
import * as types from "../actionType/users";

const initialState = {
  persons: [],
};

export default function bodyReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        persons: [...action.payload]
      };
   
    default:
      return state;
  }
}
