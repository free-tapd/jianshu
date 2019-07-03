import React from 'react';
import './App.css';
import { GlobalStyle } from './style';
import Header from "./components/header"
import store from "./store";
import {Link,Route,BrowserRouter as Router} from 'react-router-dom' 
import {Provider} from "react-redux"
import Detail from "./pages/detail/detail"
import Home from "./pages/home/home"

function App() {
  return (
  	<div>
    <Provider store={store}>
       <Header/>
	   
	    {
	    <Router>
  		<ul>
	      <li><Link to="/">主页</Link></li>
	      <li><Link to="/detail">热门</Link></li>
	     
	    </ul>

	    <div>
	      	<Route  exact path="/" component={Home}></Route>
    		<Route path="/detail" component={Detail} ></Route>
    		</div>
    	</Router>
    }
        <GlobalStyle/>
    </Provider>
    </div>
  );
}

export default App;
