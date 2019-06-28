import React from 'react';
import './App.css';
import { GlobalStyle } from './style';
import Header from "./components/header"
import store from "./store";
import {Provider} from "react-redux"

function App() {
  return (
    <Provider store={store}>
       <Header/>
        <GlobalStyle/>
    </Provider>
  );
}

export default App;
