import { apiCall } from '../../utils/api.utils';
import { API_URLS } from '../../utils/backendRoutes';

export const UserService = {
    getUser
}


function getUser(domain,email, password,callBack  ) {
    return apiCall('GET', `${API_URLS.USER.getUser}`, domain, email, password, null, callBack);
  }