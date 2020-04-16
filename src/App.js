import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Blog from './components/Blog';
import {BrowserRouter} from 'react-router-dom';
class App extends React.Component {
  render() {
  
    return (
      <BrowserRouter>
      <div className="App ">
       <Blog/>
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
