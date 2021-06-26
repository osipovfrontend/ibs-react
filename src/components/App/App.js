import React, {Component} from 'react';
import ProductList from '../ProductList/ProductList'
import './App.css'
import {BrowserRouter} from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <>
        <BrowserRouter>
          <ProductList />
        </BrowserRouter>
      </>
    );
  }
}
