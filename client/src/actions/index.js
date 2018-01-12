import axios from 'axios';
import { FETCH_USER } from './types'

// export const fetchUser = () => {
//   return function(dispatch) {
//     axios
//     .get('/api/current_user')
//     .then(res => dispatch({type: FETCH_USER, payload: res.data }));
//   }
// };

export const fetchUser = () => {
  var config = {
    headers: {'Key': '4baac27ded534e64b7d1a85f975d46c2'}
  };
  return function(dispatch) {
    axios
    .get('https://dev.tescolabs.com/product', config)
    .then(res => dispatch({type: FETCH_USER, payload: res.data }));
  }
};
