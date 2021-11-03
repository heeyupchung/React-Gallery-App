import React, {Component} from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// App Components
import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import apiKey from './Config';
import Error from './Error';
import Loading from './Loading';
import {
  cats,
  dogs,
  computers
} from './DefaultComps'; 

class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      title: '',
      loading: true
    }
  }

  // immediately fetches data from the api as the page loads
  componentDidMount() {
    this.performSearch();
  }

  //fetch the data from the api
  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => this.setState({
        photos: response.data.photos.photo,
        title: query,
        loading: false
      }))
      .catch(error => console.log('Error fetching and parsing data.', error));
  }

  render() {
    return(
    <BrowserRouter>
      <div className='container'>
        <SearchForm onSearch={this.performSearch} />
        <Nav />
        {/* ternary expression for whether the page is loaded or not */}
        { (this.state.loading) ? <Loading /> :
            <Switch>
              <Route exact path='/'><Redirect to="/cats" /></Route>
              <Route path='/search/:query' render={() => <PhotoContainer data={this.state.photos} title={this.state.title} /> } />
              <Route path='/cats' render={() => <PhotoContainer data={cats} title='cats' /> } />
              <Route path='/dogs' render={() => <PhotoContainer data={dogs} title='dogs' /> } />
              <Route path='/computers' render={() => <PhotoContainer data={computers} title='computers' /> } />
              <Route render={() => <Error />} />
            </Switch>
        }
      </div>
    </BrowserRouter>
    )
  }
};

export default App;
