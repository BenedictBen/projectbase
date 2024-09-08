import axios from 'axios'

// const apiEnd = process.env.REACT_APP_BASE_URL

// const api = axios.create({
//    baseURL: process.env.REACT_APP_API_BASE_URL,
//     // headers:{
//     //     'Content-Type': 'application/json',
//     //     'Auth': 'process.env.REACT_APP_API_KEY'
//     // }
// });

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export default API;