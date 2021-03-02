import React from 'react';
import { ApolloProvider } from '@apollo/client';
import './App.css';
import client from '../config/gql_config';
import Employees from './Employees';

function App() {
  return (
    <ApolloProvider client={client}>
      <Employees />
    </ApolloProvider>
  );
}

export default App;
