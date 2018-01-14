import axios from 'axios';
import { FETCH_USER } from './types'
import { FETCH_DATA } from './types'

var config = {
  headers: {'Ocp-Apim-Subscription-Key': '4baac27ded534e64b7d1a85f975d46c2'}
};

const url ='https://dev.tescolabs.com/grocery/products/?query=cereal&offset=0&limit=10'

export const fetchData = () => async dispatch => {
  const res = await axios.get(url , config)
  dispatch({type: FETCH_DATA, payload: res.data.uk.ghs.products.results });
};
// export const fetchData = () => async dispatch => {
//   const res = await axios.get('/api/products')
//   dispatch({type: FETCH_DATA, payload: res.data });
// };
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({type: FETCH_USER, payload: res.data });
};
