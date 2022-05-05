import { userConstants, namespace } from "../constant/user.constants";
import { UserService } from "../services/user.service";

export const userAction = (domain, email, password) => {
  const url = UserService.getUser;

 

  return (dispatch) => {
    const responses = (res) => {
        dispatch(success(res));
      };
    // dispatch(request());
    url(domain, email, password, responses);
  };

//   function request() {
//     return { type: userConstants[`GET_${namespace}_REQUEST`] };
//   }

  function success(response) {
      
    return { type: userConstants[`GET_${namespace}_SUCCESS`], response };
  }

  function failure(error) {
    if (error && error.response) {
      const data = error.response.data;
      return {
        type: userConstants[`GET_${namespace}_FAILURE`],
        error: data.message,
      };
    }
    return {
      type: userConstants[`GET_${namespace}_FAILURE`],
      error: [
        {
          name: "Network Error",
          message: "Please check your internet connection",
        },
      ],
    };
  }
};
