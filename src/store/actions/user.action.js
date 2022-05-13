import { userConstants, namespace } from "../constant/user.constants";
import { UserService } from "../services/user.service";

export const userAction = (domain, email, password) => {
  const url = UserService.getUser;

 

  return (dispatch) => {
    const responses = (res) => {
        dispatch(success(res));
      };
    url(domain, email, password, responses);
  };



  function success(response) {
      
    return { type: userConstants[`GET_${namespace}_SUCCESS`], response };
  }

};
