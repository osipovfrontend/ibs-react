import React, {useEffect, useState} from 'react';

import Loader from "../Loader/Loader";
import {ProductItem} from "../ProductItem/ProductItem";
import s from '../../index.module.css'

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
    let check = elem ? `${s.favorite_active}` : ''
    return (
      check
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
      <section className={s.sectionOuter}>
        {item ? (
          <div className={`${s.sectionInner} ${s.sectionInner_productWrapper}`}>
            <ProductItem item={item} onExit={handleExit} />
          </div>
        ) : (
          !!items ? (
            !items.length ? (<div>No data</div>) : (
             <ul className={s.productList}>
               {
                 items.map(el=>(
                   <li key={el.id}  className={s.productList__item} onClick={()=>getDataById(el.id)}>
                     <span className={`${s.favorite} ${isLike(el.like)}`}> </span>
                     <span className={s.productList__link}>
                       <img src={pathImg(el.picture.path)} alt={el.picture.alt}
                            className={s.productList__photo} />
                     </span>
                     <h4 className={s.productList__title}>{el.name}</h4>
                     <span className={s.productList__price}>{currencyProduct(el.price.currency)}{el.price.value}</span>
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