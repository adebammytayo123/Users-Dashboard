
import * as types from "../actionType/users";

const initialState = {
  results: [],
  single_gender: [],
  users_by_name: [],
  details: {},
};

export default function bodyReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        results: [...action.payload]
      };
    case types.ONE_GENDER:
      return {
        ...state,
        single_gender: state.results.filter(user => user.gender === action.payload)
      };
    
    case types.FILTER_BY_NAME:
      let newArr = []
      state.results.filter(user => {
        if (user.name.first.toLowerCase().includes(action.payload.toLowerCase())) {
          newArr.push(user)
        }
        else if (user.name.last.toLowerCase().includes(action.payload.toLowerCase())) {
          newArr.push(user)
        }
      })
      return {
        ...state,
        users_by_name: [...newArr]

      };

      case types.SET_DETAILS:
        return {
          ...state,
          details: action.payload
        };

    default:
      return state;
  }
}
