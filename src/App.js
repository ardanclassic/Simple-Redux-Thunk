import React from 'react';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import CounterApp from './Counter';

function App() {
  return (
    <Provider store={ store }>
      <CounterApp />
    </Provider>
  );
}

export default App;
