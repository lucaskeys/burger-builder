import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-burger-c4778.firebaseio.com/'
});

export default instance;
