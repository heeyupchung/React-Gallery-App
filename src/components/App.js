import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

// App Components
import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';

function App() {
  return (
    <BrowserRouter>
      <SearchForm />
      <Nav />
      <PhotoContainer />
    </BrowserRouter>
  );
}

export default App;
