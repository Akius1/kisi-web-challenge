import { groupConstants, namespace } from '../constant/group.constants';

const initialState = {
  loading: false,
  success: false,
  request: null,
  response: null,
  error: null
};

export const groups = (state = initialState, action) => {
  switch (action.type) {
    case groupConstants[`GET_${namespace}_REQUEST`]:
      return {
        ...state,
        loading: true,
        request: action.request,
        error: null
      };
    case groupConstants[`GET_${namespace}_SUCCESS`]:
      return {
        ...state,
        loading: false,
        success: true,
        response: action.response,
        error: null
      };
    case groupConstants[`GET_${namespace}_FAILURE`]:
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