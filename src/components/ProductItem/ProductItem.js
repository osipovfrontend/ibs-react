import React, {Component} from 'react'
import Utils from "../../services/utils"
import s from '../../index.module.css'

export default class ProductItem extends Component {

  utils = new Utils();

  render() {
    const { pathImg, isLike, currencyProduct } = this.utils;

    return (
      <div className={s.product}>
        <div className={s.product__photoWrapper}>
          <img src={pathImg(this.props.item.picture.path)} alt="{this.props.item.picture.alt}" className="product__photo" />
        </div>
        <div className={s.product__data}>
          <h3 className={s.product__title}>{this.props.item.name}</h3>
          <p className={s.product__text}>
            {this.props.item.description}
          </p>
          <h4>Details</h4>
          <p className={s.product__text}>
            {this.props.item.details}
          </p>
          <div className={s.product__options}>
            <div className={s.product__price}>
              <span className={s.product__total}>
                {currencyProduct(this.props.item.price.currency)}{this.props.item.price.value}
              </span>
              <div className={s.quantity}>
                <input type="button" value="-" className={s.quantity__minus} />
                <input type="number" className={s.quantity__count} min="0" max="999" defaultValue="0"/>
                <input type="button" value="+" className={s.quantity__plus}/>
              </div>
            </div>
            <div className={s.product__actions}>
              <button type="button" className={`${s.btn} ${s.btn_add}`}>Add to cart</button>
              <span className={isLike(this.props.item.like)} />
            </div>
          </div>
        </div>
        <button onClick={this.props.onExit}>Back</button>
      </div>
    )
  }
}