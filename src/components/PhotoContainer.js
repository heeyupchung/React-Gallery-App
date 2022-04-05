import React, {Component} from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

class PhotoContainer extends Component {
  render() {
    const results = this.props.data;
    let photos;
    // displays photos fetched if there is at least 1 photo. if not, NotFound is shown
    if (results.length > 0) {
      photos = results.map(photo => 
        <Photo
          url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
          key={photo.id}
          alt={photo.title}
        />
      );
      // document.body.style.backgroundImage = `url("https://live.staticflickr.com/${results[0].server}/${results[0].id}_${results[0].secret}.jpg")`;
    } else {
      photos = <NotFound />;
    }
  
    return(
      <div className="photo-container">
        <h2>{this.props.title}</h2>
        <ul>
          {photos}
        </ul>
      </div>
    );
  }
}

export default PhotoContainer;