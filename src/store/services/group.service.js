import { apiCall } from '../../utils/api.utils';
import { API_URLS } from '../../utils/backendRoutes';

export const GroupService = {
    getUserGroups
}


function getUserGroups(domain,email, password,callBack , offSet=0 ) {
    return apiCall('GET', `${API_URLS.GROUPS.getGroups}?query=&limit=10&offset=${offSet}`, domain, email, password, null, callBack);
  }

  