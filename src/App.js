import React, {useState} from 'react'
import { Route, Switch } from "react-router-dom";
import Header from './components/header'
import Product from './components/product'

function App() {
  return (
    <div>
      <Header />
      <Product />
      
      
    </div>
  );
}

export default App;
