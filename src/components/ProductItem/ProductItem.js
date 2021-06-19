import React from 'react'

export const ProductItem = ({item, ...props}) => {

  const pathImg = (path) => {
    const baseUrl = 'http://localhost:3006/'
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
      let currency_product = '$'
      return currency_product
    } else {
      let currency_product = 'Р'
      return currency_product
    }
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
              <input type="button" value="-" className="quantity__minus"/>
              <input type="number" className="quantity__count" min="0" max="999" defaultValue="0"/>
              <input type="button" value="+" className="quantity__plus"/>
            </div>
          </div>
          <div className="product__actions">
            <button type="button" className="btn btn_add">Add to cart</button>
            <span className={isLike(item.like)}></span>
          </div>
        </div>
      </div>

      <button onClick={props.onExit}>Back</button>

    </div>


  )

}