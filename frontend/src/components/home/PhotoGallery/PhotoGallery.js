import React from 'react'; 
import Gallery from 'react-photo-gallery';
import image1 from './../../../resources/image/1.png';
import image2 from './../../../resources/image/2.png';
import image3 from './../../../resources/image/3.png';
import image4 from './../../../resources/image/1.png';
import image5 from './../../../resources/image/5.png';
import image6 from './../../../resources/image/6.png';
// import image7 from './../../../resources/image/dinner1.png';
// import image8 from './../../../resources/image/breakfast3.png';
// import image9 from './../../../resources/image/lunch1.png';
// import image10 from './../../../resources/image/dinner1.png';
// import image11 from './../../../resources/image/Image1.png';
// import image12 from './../../../resources/image/Image2.png';
// import image13 from './../../../resources/image/Image3.png';
import styles from './styles.module.css';

const photos = [
    {
        src: image1,
        width: 1,
        height: 1
      },
      {
        src: image2,
        width: 4,
        height: 3
      },
      {
        src: image3,
        width: 1,
        height: 1
      },
      {
        src: image4,
        width: 4,
        height: 3
      },
      {
        src: image5,
        width: 1,
        height: 1
      },
      {
        src: image6,
        width: 4,
        height: 3
      }
]

const PhotoGallery = () => {
    return (
        <div className="container text-center">
            <br />
               <h3 className={styles.gallery_title_h3}>Our Gallery</h3>
          <h1 className={styles.gallery_title_h1}>Restaurant Photo Gallery</h1>
          <br />
            <Gallery photos={photos} />
            <br /><br />
        </div>
    );
};

export default PhotoGallery;