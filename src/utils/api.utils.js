import Kisi from "kisi-client"

const kisiClient = new Kisi()



export const apiCall = async (
  requestType,
  url,
  domain,
  email,
  password,
  page,
 callBack

) => {
  return await kisiClient
  .signIn({ domain: domain, email:  email, password: password })
  .then(async() => {
    requestType === "GET" && page ? 
      kisiClient
          .get(`${url}/${page}`)
          .then(res => callBack(res))
          .catch((error) => {
            callBack(error)
          })

          : requestType === "GET" ?

       kisiClient
          .get(`${url}`)
          .then(res => callBack(res))
          .catch((error) => {
            callBack(error)
          })
        :
      kisiClient
          .post(`${url}`)
          .then(res => callBack(res))
          .catch((error) => {
            callBack(error)
          })
  })
};