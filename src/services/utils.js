import s from '../index.module.css'

export default class Utils {

  pathImg = (path) => {
    const baseUrl = 'http://localhost:3006/'
    return (
      baseUrl+path
    )
  }

  isLike = (elem) => {
    let check = elem ? `${s.favorite_active}` : ''
    return (
      check
    )
  }

  currencyProduct = (valuta) => {
    if (valuta === 'USD') {
      return '$'
    } else {
      return 'Р'
    }
  }

}

