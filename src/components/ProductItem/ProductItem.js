import React from 'react'
import {NavLink} from "react-router-dom";

const ProductItem = ({item}) => {


  const pathImg = (path) => {
    const baseUrl = 'http://localhost:3014/'
    return (
      baseUrl+path
    )
  }

  const isLike = (elem) => {
    let like = 'favorite '
    let check = elem ? 'active' : ''
    return (
      like + check
    )
  }

  const currencyProduct = (valuta) => {
    if (valuta === 'USD') {
      return '$'
    } else {
      return 'Р'
    }
  }

  let itemsCount = React.createRef()

  const onDecrement = () => {
    let countProduct = +itemsCount.current.value;
    if (countProduct > 0) {
      countProduct -= 1;
    }
    itemsCount.current.value = countProduct;
  }

  const onIncrement = () => {
    let countProduct = +itemsCount.current.value;
    countProduct += 1;
    itemsCount.current.value = countProduct;
  }


  return (
    <div className="product">
      <div className="product__photo-wrapper">
        <img src={pathImg(item.picture.path)} alt={item.picture.alt} className="product__photo"/>
      </div>
      <div className="product__data">
        <h3 className="product__title">{item.name}</h3>
        <p className="product__text">
          {item.description}
        </p>
        <h4>Details</h4>
        <p className="product__text">
          {item.details}
        </p>
        <div className="product__options">
          <div className="product__price">
            <span className="product__total">
              {currencyProduct(item.price.currency)}{item.price.value}
            </span>
            <div className="quantity">
              <input type="button" value="-" className="quantity__minus"  onClick={onDecrement} />
              <input type="number" className="quantity__count" min="0" max="999" ref={itemsCount} defaultValue="0"/>
              <input type="button" value="+" className="quantity__plus" onClick={onIncrement}/>
            </div>
          </div>
          <div className="product__actions">
            <button type="button" className="btn btn_add">Add to cart</button>
            <span className={isLike(item.like)}></span>
          </div>
        </div>
        <NavLink to="/" className="btn btn_add">Вернуться на страницу каталога</NavLink>
      </div>
    </div>
  )
}

export default ProductItem