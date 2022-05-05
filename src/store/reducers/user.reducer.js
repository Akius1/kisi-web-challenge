import { userConstants, namespace } from '../constant/user.constants';

const initialState = {
  loading: false,
  success: false,
  request: null,
  response: null,
  error: null
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case userConstants[`GET_${namespace}_REQUEST`]:
      return {
        ...state,
        loading: true,
        request: action.request,
        error: null
      };
    case userConstants[`GET_${namespace}_SUCCESS`]:
      return {
        ...state,
        loading: false,
        success: true,
        response: action.response,
        error: null
      };
    case userConstants[`GET_${namespace}_FAILURE`]:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error
      };
    default:
      return state;
  }
};