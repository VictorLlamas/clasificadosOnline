import queryString from 'query-string'
//const BASE_URL = 'http://localhost:4000/'
const BASE_URL = 'https://clasificados-online.herokuapp.com'
const token = localStorage.getItem('token')

export function findAds(params){
    const state = queryString.parse(params)
    let search;
    if(!isNaN(state.search)){
        search = {
            address: state.search,
            neighborhood: state.search,
            city: state.search,
            zipCode: +state.search,
            transactionType: state.transactionType
        }
    }else{
        search = {
         address: state.search,
         neighborhood: state.search,
         city: state.search,
         zipCode: 0,
         transactionType: state.transactionType
        }
    }
    return fetch(`${BASE_URL}/public-ads/search-ads`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(search)
    })
    .then(response => response.json())
}