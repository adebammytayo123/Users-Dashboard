import * as types from "../actionType/users";
import axios from "axios";



export const getUsers = (payload) => {
    return {
      type: types.GET_USERS,
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
