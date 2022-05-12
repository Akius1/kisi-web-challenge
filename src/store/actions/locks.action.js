import { lockConstants, namespace } from "../constant/locks.contants";
import { DoorService } from "../services/door.service";

export const locksAction = (domain, email, password, id) => {
  const url = DoorService?.getLocks;

 

  return (dispatch) => {
    const responses = (res) => {
        dispatch(success(res));
      };
    url(domain, email, password, responses, id);
  };


  function success(response) {
      
    return { type: lockConstants[`GET_${namespace}_SUCCESS`], response };
  }

};