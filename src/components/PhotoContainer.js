import React, {Component} from 'react';
import { getFID } from 'web-vitals';
import Photo from './Photo';
import NoPhotos from './NoPhotos';
import NotFound from './NotFound';

class PhotoContainer extends Component {
  render() {
    return(
      <div className="photo-container">
        <h2>Results</h2>
        <ul>

    
          {/* const results = this.props.data;
          let photos;
          if (results.length > 0) {
            photos = results.map(photo => 
              <Photo
                url={photo.images.fixed_height.url}
                key={photo.id}
              />
            );
          } else {
            photos = <NoPhotos />;
          } */}
    
          <NotFound />
        </ul>
      </div>
    );
  }
}


export default PhotoContainer;