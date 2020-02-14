import React from 'react';
import { Provider } from 'react-redux';
import * as Sentry from '@sentry/browser';

import './App.css';
import Router from './components/Router';
import { store } from './redux/stores';

// Sentry.init({
//   dsn: "https://c0a1124b36e94a158b723fdbcefe2af0@sentry.io/2493924",
//   release: `app@${process.env.commit || 'default'}`,
// });

function App() {
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
}

export default App;

