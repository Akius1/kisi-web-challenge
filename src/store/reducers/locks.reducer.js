import { lockConstants, namespace } from '../constant/locks.contants';

const initialState = {
  loading: false,
  success: false,
  request: null,
  response: null,
  error: null
};

export const locks = (state = initialState, action) => {
  switch (action.type) {
    case lockConstants[`GET_${namespace}_REQUEST`]:
      return {
        ...state,
        loading: true,
        request: action.request,
        error: null
      };
    case lockConstants[`GET_${namespace}_SUCCESS`]:
      return {
        ...state,
        loading: false,
        success: true,
        response: action.response,
        error: null
      };
    case lockConstants[`GET_${namespace}_FAILURE`]:
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