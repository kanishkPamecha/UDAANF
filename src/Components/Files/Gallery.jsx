
import React, { useState } from 'react';
import './Gallery.css';
import { Link } from 'react-router-dom';
function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      thumbnail: 'https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA0OTI3Nw&ixlib=rb-1.2.1&q=80&w=400',
      gallery: [
        'https://picsum.photos/id/1028/300/300',
        'https://picsum.photos/id/15/300/300',
        'https://picsum.photos/id/1040/300/300',
        'https://picsum.photos/id/106/300/300',
        'https://picsum.photos/id/136/300/300',
        'https://picsum.photos/id/1039/300/300',
        'https://picsum.photos/id/110/300/300',
        'https://picsum.photos/id/1047/300/300',
        'https://picsum.photos/id/1057/300/300',
      ]
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1633621533308-8760aefb5521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA1MjAyMQ&ixlib=rb-1.2.1&q=80&w=400',
      gallery: [
        'https://picsum.photos/id/15/300/300',
        'https://picsum.photos/id/1028/300/300',
        'https://picsum.photos/id/1040/300/300',
        'https://picsum.photos/id/136/300/300',
        'https://picsum.photos/id/1039/300/300',
        'https://picsum.photos/id/106/300/300',
        'https://picsum.photos/id/110/300/300',
        'https://picsum.photos/id/1057/300/300',
        'https://picsum.photos/id/1047/300/300',
      ]
    },
    // Add more images and corresponding galleries as needed
  ];

  return (
    <div className="background-Container">

    <div style= {{zIndex:"1001"}} className='h2'>UDAAN AEROMODELLING CLUB</div>
    <div className='navbar'>
    
    <div style= {{zIndex:"1001"}}className="tab_Group ">
      <div  className="txt  text-wrapper-selected   text-wrapper-3">About US</div>
      <Link   to="/achievements"  className=" txt text-wrapper our-achievments">Our Achievments</Link>
      <Link  to="/PhotoGallery" className=" txt text-wrapper text-wrapper-4">Galllery</Link>
      <Link to="/ContactUs"  className=" txt text-wrapper  text-wrapper-5">Contact US</Link>
    </div>
    </div>
      <ul className="main-gallery">
        {images.map((image, index) => (
          <li key={index}>
            <a href="#" onClick={() => setSelectedImage(image.gallery)}>
              <figure>
                <img className="gallery-img" src={image.thumbnail} alt="Thumbnail" />
                <figcaption>Gallery {index + 1}</figcaption>
              </figure>
            </a>
          </li>
        ))}
      </ul>
      
      {selectedImage && (
        <div className="fullscreen-gallery">
          <button className="close-button" onClick={() => setSelectedImage(null)}>X</button>
          <div className="gallery">
            {selectedImage.map((img, idx) => (
              <img key={idx} src={img} alt={`Gallery Image ${idx + 1}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
