import React, {Component, useEffect, useState} from 'react';

import Loader from "../Loader/Loader";
import {ProductItem} from "../ProductItem/ProductItem";

const ProductList = () => {

  const [item, setItem] = useState(null)
  const [items, setItems] = useState(null)

  const getData = async () => {
    try {
      const res = await fetch('http://localhost:3006/item');
      const data = await res.json()
      setItems(data.content)
    }catch (e) {
      console.log("err", e)
    }
  }

  useEffect(() => {
    getData()
  }, [])


  const getDataById = async (id) => {
    try {
      const res = await fetch(`http://localhost:3006/item/${id}`);
      const data = await res.json()
      setItem(data.content)
    }catch (e) {
      console.log("error", e)
    }
  }

  const handleExit = () => {
    setItem(null)
  }

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
    <main>
      <section className="section-outer">
        {item ? (
          <div className="section-inner section-inner_product-wrapper">
            <ProductItem item={item} onExit={handleExit} />
          </div>
        ) : (
          !!items ? (
            !items.length ? (<div>No data</div>) : (
             <ul className="product-list">
               {
                 items.map(el=>(
                   <li key={el.id}  className="product-list__item" onClick={()=>getDataById(el.id)}>
                     <span className={isLike(el.like)}> </span>
                     <span className="product-list__link">
                       <img src={pathImg(el.picture.path)} alt={el.picture.alt}
                            className="product-list__photo" />
                     </span>
                     <h4 className="product-list__title">{el.name}</h4>
                     <span className="product-list__price">{currencyProduct(el.price.currency)}{el.price.value}</span>
                   </li>
                 ))
               }
             </ul>
            )
          ) : (
            <Loader />
          )
        )}
      </section>
    </main>
  )
}


export default ProductList