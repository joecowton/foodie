import axios from 'axios';
import { FETCH_USER } from './types'
import { FETCH_DATA } from './types'

export const fetchData = () => async dispatch => {
  const res = await axios.get('/api/products')
  dispatch({type: FETCH_DATA, payload: res.data });
};
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({type: FETCH_USER, payload: res.data });
};
