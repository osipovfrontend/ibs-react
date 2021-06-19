import React, {Component} from 'react'
import Utils from "../../services/utils";

export default class ProductItem extends Component {

  utils = new Utils();

  render() {
    const { pathImg, isLike, currencyProduct } = this.utils;

    return (
      <div className="product">
            <div className="product__photo-wrapper">
              <img src={pathImg(this.props.item.picture.path)} alt="{this.props.item.picture.alt}" className="product__photo"/>
            </div>
            <div className="product__data">
              <h3 className="product__title">{this.props.item.name}</h3>
              <p className="product__text">
                {this.props.item.description}
              </p>
              <h4>Details</h4>
              <p className="product__text">
                {this.props.item.details}
              </p>
              <div className="product__options">
                <div className="product__price">
                  <span className="product__total">{currencyProduct(this.props.item.price.currency)}{this.props.item.price.value}</span>
                  <div className="quantity">
                    <input type="button" value="-" className="quantity__minus"/>
                    <input type="number" className="quantity__count" min="0" max="999" defaultValue="0"/>
                    <input type="button" value="+" className="quantity__plus"/>
                  </div>
                </div>
                <div className="product__actions">
                  <button type="button" className="btn btn_add">Add to cart</button>
                  <span className={isLike(this.props.item.like)}></span>
                </div>
              </div>
            </div>
        <button onClick={this.props.onExit}>Back</button>
      </div>
    )
  }
}