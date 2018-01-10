import react from 'react';
import reactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers'; // import all reducers

// creating Redux Store with dummy reducer
const store = createStore(() => [], {}, applyMiddleware());

// Redering set up: passing redux store with immediate child - App tag, to provider :
//provider is a react component that knows how to read changes from redux store.

// Wire up the redux store:

ReactDOM.render(
  <Provider>store={store}><App /></Provider>,
  document.querySelector('#root')
 )



//auth Reducer

//survey reducer
