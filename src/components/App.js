import React, {Component} from 'react';
import axios from 'axios';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

// App Components
import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import apiKey from './Config';
import Error from './Error';
import Loading from './Loading';
import Default from './Default';
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
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&sort=relevance&safe_search=1&per_page=24&format=json&nojsoncallback=1`)
      .then(response => this.setState({
        photos: response.data.photos.photo,
        title: query,
        loading: false
      }))
      .catch(error => console.log('Error fetching and parsing data.', error));
  }

  render() {
    return(
    <HashRouter>
      <div className='container'>
        <h1>FLEEKER</h1>
        <hr></hr>
        <SearchForm onSearch={this.performSearch} />
        <Nav />
        <hr></hr>
        { (this.state.loading) ? <Loading /> :
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + '/'}><Default /></Route>
              <Route path='/search/:query' render={() => <PhotoContainer data={this.state.photos} title={this.state.title} /> } />
              <Route path='/cats' render={() => <PhotoContainer data={cats} title='cats' /> } />
              <Route path='/dogs' render={() => <PhotoContainer data={dogs} title='dogs' /> } />
              <Route path='/computers' render={() => <PhotoContainer data={computers} title='computers' /> } />
              <Route render={() => <Default />} />
            </Switch>
        }
        <hr></hr>
        <div className='footer'>
          <p>&copy; 2022 Hee Yup Chung</p>
        </div>
      </div>
    </HashRouter>
    )
  }
};

export default App;
