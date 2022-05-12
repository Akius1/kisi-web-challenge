import { apiCall } from "../../utils/api.utils";
import { API_URLS } from "../../utils/backendRoutes";

export const DoorService = {
  getGroupsLocks,
  removeGroupLock,
  getLocks,
  addLocks
};

function getGroupsLocks(domain, email, password, callBack, id) {
  return apiCall(
    "GET",
    `${API_URLS.LOCKS.getlocks}?group_id=${id}`,
    domain,
    email,
    password,
    null,
    callBack
  );
}

function removeGroupLock(domain, email, password, id) {
  return apiCall(
    "DELETE",
    `${API_URLS.LOCKS.deleteGroupLock}/${id}`,
    domain,
    email,
    password,
    null,
    null
  );
}

function getLocks(domain, email, password, callBack, id) {
  return apiCall(
    "GET",
    id ? `${API_URLS.LOCKS.retrieveLocks}?place_id=${id}&limit=10`: `${API_URLS.LOCKS.retrieveLocks}?limit=10`,
    domain,
    email,
    password,
    null,
    callBack
  );
}

function addLocks(domain, email, password, callBack, data) {
    return apiCall(
      "POST",
      `${API_URLS.LOCKS.addDoor}`,
      domain,
      email,
      password,
      null,
      callBack,
      data
    );
  }