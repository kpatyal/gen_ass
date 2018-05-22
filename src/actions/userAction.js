import axios from 'axios';
export const getUser = (id) => {
    return {
      type: 'GET_USER',
      payload: axios.get(`https://reqres.in/api/users/${id}`)
    }
  }