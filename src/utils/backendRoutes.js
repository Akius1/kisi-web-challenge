import environment from '../environment';

const baseUrl = environment.baseUrl;

export const API_URLS = {
 
  USER: {
    getUser: `${baseUrl}user`,
   
  },

  GROUPS:{
    getGroups: `${baseUrl}groups`,
  },
  LOCKS:{
    getlocks: `${baseUrl}group_locks`,
    deleteGroupLock: `${baseUrl}group_locks`,
    retrieveLocks: `${baseUrl}locks`,
    addDoor:`${baseUrl}group_locks`
  }
  
};
