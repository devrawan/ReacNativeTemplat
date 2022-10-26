import axios from 'axios'
export const user_login = async data => {
    try {
      const result = await axios('https://student.valuxapps.com/api/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        data: data,
      });
      return result;
    } catch (error) {
      return error.response.data;
    }
  };