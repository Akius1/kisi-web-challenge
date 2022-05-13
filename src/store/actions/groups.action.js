import { groupConstants, namespace } from "../constant/group.constants";
import { GroupService } from "../services/group.service";

export const groupAction = (domain, email, password, offset) => {
  const url =GroupService.getUserGroups;

 

  return (dispatch) => {
    const responses = (res) => {
        dispatch(success(res));
      };
    url(domain, email, password, responses, offset);
  };

 

  function success(response) {
      
    return { type: groupConstants[`GET_${namespace}_SUCCESS`], response };
  }

 
};
