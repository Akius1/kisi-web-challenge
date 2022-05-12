import { doorConstants, namespace } from "../constant/door.constants";
import { DoorService } from "../services/door.service";

export const doorAction = (domain, email, password, id) => {
  const url = DoorService?.getGroupsLocks;

  return (dispatch) => {
    const responses = (res) => {
      dispatch(success(res));
    };
    url(domain, email, password, responses, id);
  };

  function success(response) {
    return { type: doorConstants[`GET_${namespace}_SUCCESS`], response };
  }
};

export const addLockActions = (domain, email, password, data) => {
  const url = DoorService?.addLocks;

  return (dispatch) => {
    const responses = (res) => {
      dispatch(success(res));
    };
    url(domain, email, password, responses, data);
  };

  function success(response) {
    return { type: doorConstants[`GET_${namespace}_SUCCESS`], response };
  }

};
