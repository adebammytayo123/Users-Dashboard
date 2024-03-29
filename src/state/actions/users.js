import * as types from "../actionType/users";
import axios from "axios";



export const getUsers = (payload) => {
  return {
    type: types.GET_USERS,
    payload,
  };
};

export const filterByGender = (payload) => {
  return {
    type: types.ONE_GENDER,
    payload,
  };
};

export const filterByName = (payload) => {
  return {
    type: types.FILTER_BY_NAME,
    payload,
  };
};
export const filterByCountry = (payload) => {
  return {
    type: types.FILTER_BY_COUNTRY,
    payload,
  };
};
export const setDetails = (payload) => {
  return {
    type: types.SET_DETAILS,
    payload,
  };
};

export const setLoading = (payload) => {
  return {
    type: types.LOADING,
    payload,
  };
};

export const getAllUsers = () => async (dispatch) => {
  dispatch(setLoading(true))
  await axios.get(`https://randomuser.me/api/?results=50`)
    .then(({ data }) => {
      dispatch(setLoading(false))
      dispatch(getUsers(data.results))
      console.log("sol", data.results)
    })
    .catch((err) => {
      dispatch(setLoading(false))
      return err;
    });
};
