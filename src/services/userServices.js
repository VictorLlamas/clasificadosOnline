//const BASE_URL = 'http://localhost:4000'
const BASE_URL = 'https://clasificados-online.herokuapp.com'
const token = localStorage.getItem('token')

export function getToken(data) {
    return fetch(`${BASE_URL}/public-users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
}


export function updateUser(userData){
    return fetch(`${BASE_URL}/users/update`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(userData)
    }).then(response => response.json())
}

export function createUser(userData){
    return fetch(`${BASE_URL}/public-users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    }).then(response => response.json())
}