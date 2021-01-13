
import * as types from "../actionType/users";

const initialState = {
  results: [],
  single_gender: [],
  users_by_name:[]
};

export default function bodyReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        results: [...action.payload]
      };
    case types.ONE_GENDER:
      return {...state,
      single_gender:  state.results.filter(user=>user.gender === action.payload)
      }
    
      case types.USER_BY_NAME:
        return {...state,
        single_gender:  state.results.filter(user=>user.gender === action.payload)
        }
    
     
   
    default:
      return state;
  }
}
