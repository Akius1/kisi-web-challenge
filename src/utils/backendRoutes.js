import environment from '../environment';

const baseUrl = environment.baseUrl;

export const API_URLS = {
 
  USER: {
    getUser: `${baseUrl}user`,
   
  },

  GROUPS:{
    getGroups: `${baseUrl}groups`,
  }
  
};
