import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import Router from './components/Router';
import { store } from './redux/stores';

function App() {
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
}

export default App;
