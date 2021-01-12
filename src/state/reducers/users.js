
import * as types from "../actionType/users";

const initialState = {
  persons: [],
  maleUsers: [],
  femaleUsers: [],
};

export default function bodyReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        persons: [...action.payload]
      };
      case types.MALE_USERS:
        return {
          ...state,
          maleUsers: action.payload
      };
      case types.FEMALE_USERS:
        return {
          ...state,
          femaleUsers: action.payload
        };
  
  
   
    default:
      return state;
  }
}
