import react from 'react';
import reactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';

// creating Redux Store
const store = createStore(() => [], {}, applyMiddleware());

// Redering set up: passing redux store with immediate child - App tag, to provider :
//provider is a react component that knows how to read changes from redux store.  
ReactDOM.render(
  <Provider>store={store}><App /></Provider>,
  document.querySelector('#root')
 )
