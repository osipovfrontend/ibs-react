import React, { Component } from 'react';

import Header from '../Header/Header';
import ProductList from '../ProductList/ProductList'

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import './App.css'

export default class App extends Component {

  onClickedItem = (id) => {
    this.setState({
      clickedProduct: id
    });
  };

  render() {
    return (
      <>
        <Header />
        <main>
          <ProductList />
        </main>
      </>
    );
  }
}
