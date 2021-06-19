export default class Utils {

  pathImg = (path) => {
    const baseUrl = 'http://localhost:3006/'
    return (
      baseUrl+path
    )
  }

  isLike = (elem) => {
    let like = 'favorite'
    let check = elem ? ' active' : ''
    return (
      like + check
    )
  }

  currencyProduct = (valuta) => {
    if (valuta === 'USD') {
      let currency_product = '$'
      return currency_product
    } else {
      let currency_product = 'Р'
      return currency_product
    }
  }

}

