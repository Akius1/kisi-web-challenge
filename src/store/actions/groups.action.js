import { groupConstants, namespace } from "../constant/group.constants";
import { GroupService } from "../services/group.service";

export const groupAction = (domain, email, password) => {
  const url =GroupService.getUserGroups;

 

  return (dispatch) => {
    const responses = (res) => {
        dispatch(success(res));
      };
    // dispatch(request());
    url(domain, email, password, responses);
  };

  // function request() {
  //   return { type: groupConstants[`GET_${namespace}_REQUEST`] };
  // }

  function success(response) {
      
    return { type: groupConstants[`GET_${namespace}_SUCCESS`], response };
  }

  function failure(error) {
    if (error && error.response) {
      const data = error.response.data;
      return {
        type: groupConstants[`GET_${namespace}_FAILURE`],
        error: data.message,
      };
    }
    return {
      type: groupConstants[`GET_${namespace}_FAILURE`],
      error: [
        {
          name: "Network Error",
          message: "Please check your internet connection",
        },
      ],
    };
  }
};
