import React, { Component } from 'react';

import Loader from "../Loader/Loader";
import ProductItem from "../ProductItem/ProductItem";

import Utils from "../../services/utils";

export default class ItemList extends Component {

  utils = new Utils();

  state = {
    item: null,
    items: null
  }

  getData = async () => {
    try {
      const res = await fetch('http://localhost:3006/item');
      const data = await res.json()
      this.setState({
        items: data.content
      })
    }catch (e) {
      console.log("err", e)
    }
  }

  getDataById = async (id) => {
    try {
      const res = await fetch(`http://localhost:3006/item/${id}`);
      const data = await res.json()
      this.setState({
        item: data.content
      })
    }catch (e) {
      console.log("error", e)
    }
  }

  componentDidMount(prop, state) {
    this.getData()
  }

  handleExit = () => {
    this.setState({
      item: null
    })
  }

  render() {
    const { pathImg, isLike, currencyProduct } = this.utils;
    return (
      <main>
        <section className="section-outer">
            {this.state.item ? (
                <div className="section-inner section-inner_product-wrapper">
                  <ProductItem item={this.state.item} onExit={this.handleExit} />
                </div>
            ) : (
              !!this.state.items ? (
                !this.state.items.length ? (<div>No data</div>) : (
                  <div className="section-inner">
                    <ul className="product-list">
                   {
                     this.state.items.map(el=>(
                       <li key={el.id} className="product-list__item" onClick={()=>this.getDataById(el.id)}>
                         <span className={isLike(el.like)}> </span>
                         <span className="product-list__link">
                           <img src={pathImg(el.picture.path)} alt={el.picture.alt}
                                className="product-list__link product-list__photo" />
                         </span>
                         <h4 className="product-list__title">{el.name}</h4>
                         <span className="product-list__price">{currencyProduct(el.price.currency)}{el.price.value}</span>
                       </li>
                     ))
                   }
                 </ul>
                  </div>
                )
              ) : (
                <Loader />
              )
            )}
        </section>
      </main>
    )
  }
}