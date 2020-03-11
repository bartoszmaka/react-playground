import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import { Provider } from 'react-redux';
import * as Sentry from '@sentry/browser';

import './App.css';
import Router from './components/Router';
import { store } from './redux/stores';
import { client } from './utils/graphql';

const env = process.env.NODE_ENV || 'development'
if (env !== 'development') {
  Sentry.init({
    dsn: "https://c0a1124b36e94a158b723fdbcefe2af0@sentry.io/2493924",
    release: `app@${process.env.commit || 'default'}`,
  });
}

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Router/>
      </Provider>
    </ApolloProvider>
  );
}

export default App;

