import React from 'react';
import { Provider } from 'react-redux'
import store from './Redux/store'
import Container from './Components/Container';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container />
      </div>
    </Provider>

  );
}

export default App;
