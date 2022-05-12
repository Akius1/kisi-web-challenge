import Kisi from "kisi-client"

const kisiClient = new Kisi()



export const apiCall = async (
  requestType,
  url,
  domain,
  email,
  password,
  page,
 callBack,
 data

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
        requestType === "DELETE" ? 

        kisiClient
          .delete(`${url}`)
          .then(res => callBack(res))
          .catch((error) => {
            callBack(error)
          })
          :
          // console.log(data)
      kisiClient
          .post(`${url}`, {group_lock:data})
          .then(res => callBack(res))
          .catch((error) => {
            callBack(error)
          })
  })
};