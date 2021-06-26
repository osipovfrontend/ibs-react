import React, { Component } from 'react';
import Header from '../Header/Header';
import ProductList from '../ProductList/ProductList'
import s from '../../index.module.css'

import './App.css';

export default class App extends Component {

  render() {
    return (
      <>
        <Header />
        <ProductList />
      </>
    );
  }
}
