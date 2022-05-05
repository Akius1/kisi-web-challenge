import { apiCall } from '../../utils/api.utils';
import { API_URLS } from '../../utils/backendRoutes';

export const GroupService = {
    getUserGroups
}


function getUserGroups(domain,email, password,callBack  ) {
    return apiCall('GET', `${API_URLS.GROUPS.getGroups}`, domain, email, password, null, callBack);
  }