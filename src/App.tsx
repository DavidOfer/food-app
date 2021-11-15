import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { store } from '../src/state';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Layout />
      </div>
    </Provider>
  );
}

export default App;
