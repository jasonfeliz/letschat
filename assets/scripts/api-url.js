'use strict'

const apiUrls = {
  development: 'http://localhost:3000',
  production: 'https://gachatapp.herokuapp.com'
}


const apiUrl = window.location.hostname === 'localhost' ? apiUrls.development : apiUrls.production

module.exports = apiUrl
