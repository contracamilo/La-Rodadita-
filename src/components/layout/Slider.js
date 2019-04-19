import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery';
 
class SliderGAllery extends Component {
 
  render() {
 
    const images = [
      {
        original: 'https://2486634c787a971a3554-d983ce57e4c84901daded0f67d5a004f.ssl.cf1.rackcdn.com/intercontinental-saint-paul/media/intercontinental-saintpaul-privacy-policy-header-5c7814f3103a1.jpg',
        thumbnail: 'https://2486634c787a971a3554-d983ce57e4c84901daded0f67d5a004f.ssl.cf1.rackcdn.com/intercontinental-saint-paul/media/intercontinental-saintpaul-privacy-policy-header-5c7814f3103a1.jpg',
      }
    ]
 
    return (
      <ImageGallery items={images} />
    );
  }
 
}

export default SliderGAllery
