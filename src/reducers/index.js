// reducer for index.js
import {combineReducers } from 'redux';
import authReducer from './authReducer';

export default combinedReduce ({
  auth: authReducer  //the auth state is manufactured by authReducer
});
