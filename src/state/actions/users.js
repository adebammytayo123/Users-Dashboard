import * as types from "../actionType/users";
import axios from "axios";



export const getUsers = (payload) => {
    return {
      type: types.GET_USERS,
      payload,
    };
  };
  export const maleUsers = (payload) => {
    return {
      type: types.MALE_USERS,
      payload,
    };
};
export const femaleUsers = (payload) => {
  return {
    type: types.FEMALE_USERS,
    payload,
  };
};
export const getAllUsers = () => async (dispatch) => {
  await axios.get(`https://randomuser.me/api/?results=20`)
    .then(({ data }) => {
      console.log("dataaaa", data.results)
      dispatch(getUsers(data.results))
    })
    .catch((err) => {
      return err;
    });
};

export const getUsersByGender = (gender) => async (dispatch) => {
  await axios
    .get(`https://randomuser.me/api/?results=20/gender/${gender}`)
    .then(({ data }) => {
      console.log("maleeeee", data);
      if (gender === "male") {
        dispatch(maleUsers(data.results));
      } else if (gender === "female") {
        dispatch(femaleUsers(data.results));
      } 
    })
    .catch((err) => {
      console.log("error", err);
    });
};
