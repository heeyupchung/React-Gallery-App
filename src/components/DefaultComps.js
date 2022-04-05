import axios from 'axios';
import apiKey from './Config';

let cats = {};
let dogs = {};
let computers ={};

axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=cats&sort=relevance&safe_search=1&per_page=24&format=json&nojsoncallback=1`)
  .then(response => {
    cats = response.data.photos.photo
  });
  
axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=dogs&sort=relevance&safe_search=1&per_page=24&format=json&nojsoncallback=1`)
  .then(response => {
    dogs = response.data.photos.photo
  });

axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=computers&sort=relevance&safe_search=1&per_page=24&format=json&nojsoncallback=1`)
  .then(response => {
    computers = response.data.photos.photo
  });

export {cats, dogs, computers};