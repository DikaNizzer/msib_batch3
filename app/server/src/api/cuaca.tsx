import { API } from 'server-web'

export default [
  '/cuaca_',

  
  async ({ body, reply }) => {
    const API_KEY   =   '6b57a29f504d06e8186d0b7a87c9e3e9';
    const BASE_URL  =   'https://api.openweathermap.org/data/2.5';
    
    const getDataCuaca = (infoType, searchParams) =>{
        const url = new URL(BASE_URL + '/' + infoType );
        url.search = new URLSearchParams({...searchParams, appid:API_KEY})
     
        return fetch(url)
        .then((res) => res.json())
        .then((data) => data);
    }

//     const getWeatherData = (infoType, searchParams) => {
//         const url = new URL(BASE_URL + "/" + infoType);
//         url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
      
//         return fetch(url).then((res) => res.json());
//       };
//     reply.send("cuaca_ works!")
//   },
] as API
      