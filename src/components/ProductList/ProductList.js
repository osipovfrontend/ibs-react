import React, {useEffect, useState} from 'react';

import Loader from "../Loader/Loader";
import ProductItem from "../ProductItem/ProductItem";
import {NavLink, Route} from "react-router-dom";

const ProductList = () => {

  const [item, setItem] = useState(null)
  const [items, setItems] = useState([])
  const [filteredItems,setFilteredItems] = useState(items)

  const getData = async () => {
    try {
      const res = await fetch('http://localhost:3014/item');
      const data = await res.json()
      setItems(data.content)
      setFilteredItems(data.content)
    }catch (e) {
      console.log("err", e)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const getDataById = async (id) => {
    try {
      const res = await fetch(`http://localhost:3014/item/${id}`);
      const data = await res.json()
      setItem(data.content)
    } catch (e) {
      console.log("error", e)
    }
  }

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

  const currencyProduct = (currency) => {
    if (currency === 'USD') {
      return '$'
    } else {
      return 'Р'
    }
  }

  const inputSearch = (event) => {
    let value = event.target.value.toLowerCase()
    let result = []
    result = items.filter((data) => {
      return data.name.toLowerCase().search(value) !== -1
    })
    setFilteredItems(result)
  }

  const toggleWishlist = (index) => {
    const newItems = [...items];
    newItems[index].like = !newItems[index].like;
    setItems(newItems);
  };

  return (
    <>
      <header className="section-outer">
        <div className="section-inner section-inner_header">
          <div className="topbar">
            <div className="search-panel">
              <form>
                <label>
                  <input type="search" className="search-panel__input" onChange={(event) =>inputSearch(event)}  placeholder="Search products" />
                  <svg className="search-panel__icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11V11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"/>
                  </svg>
                </label>
              </form>
            </div>
            <ul className="user-options">
              <li className="user-options__item">
            <span className="user-options__link">
              <span className="user-options__icon user-options__icon_shopping-cart" />
            </span>
              </li>
              <li className="user-options__item">
            <span className="user-options__link">
              <span className="user-options__icon user-options__icon_user-account" />
            </span>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main>

        <section className="section-outer">
          <Route path="/:id" render={() => {
            return (
              item ? (
                <div className="section-inner section-inner_product-wrapper">
                  <ProductItem item={item} />
                </div>
              ) : (
                <NavLink to="/" className="btn btn_add">Вернуться на страницу каталога</NavLink>
              )
            )
          }}/>

          <Route exact path={"/"} render={() => {
            return (
              !!filteredItems ? (
                !filteredItems.length ? (<div>Товаров, соответствующих вашему запросу не найдено</div>) : (
                  <ul className="product-list">
                    {
                      filteredItems.map((el, index) => (
                        <li key={el.id} className="product-list__item">
                          <span className={isLike(el.like)} onClick={() => toggleWishlist(index)} />

                          <NavLink to={`/${el.id}`} className="product-list__link" onClick={() => getDataById(el.id)}>
                            <img src={pathImg(el.picture.path)} alt={el.picture.alt}
                                 className="product-list__photo" />
                          </NavLink>
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
            )
          }}/>
        </section>
      </main>
    </>
  )
}

export default ProductList