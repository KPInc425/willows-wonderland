import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ArtworkDetail from './ArtworkDetail';
import HeadingLabel from './HeadingLabel';
import styles from '@/styles/Home.module.css'

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const GalleryItem = styled.div`
  width: 300px;
  height: 300px;
  margin: 20px;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  ${({ isOpen }) => !isOpen && `
    &:hover {
      transform: scale(1.2);
    }
  `}  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 600px) {
    width: 200px;
    height: 200px;
  }
`;

const NavLink = ({ label, destination }) => {
  return (
    <a href={ destination }>
      <p>{ label }</p>
    </a>
  )
};

const Gallery = () => {
  const [artworks, setArtworks] = useState([]);
  const [clickedArtwork, setClickedArtwork] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Fetch the artist's artworks from an API or a local JSON file
    // and set the state with the data
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => setArtworks(data))
      .catch((error) => console.log(error));
  }, []);

  const handleClick = (artwork) => {
    setClickedArtwork(artwork);
    setIsOpen(!isOpen);
  };

  const clearDetails = ()=> {
    if (isOpen) {
      setIsOpen(!isOpen);
    }
  }

  return (
    <div onClick={clearDetails}>
      <div className={styles.description} style={{display: "flex", flexWrap: "wrap", margin: "0 auto", justifyContent: "center", columnGap: "1rem", alignItems: "flex-end"}}>
        <NavLink label={ "Home" } destination={"/"} />
        <HeadingLabel label={ "Willow's Wonderland" } />
        <NavLink label={ "Shop" } destination={"/shop"} />
      </div>
      <GalleryWrapper>
        {artworks.map((artwork) => (
          <GalleryItem 
            className='card'
            key={artwork.id} 
            isOpen={isOpen}
            onClick={() => handleClick(artwork)}>
            <img src={artwork.url} alt={artwork.title} />
          </GalleryItem>
        ))}
        </GalleryWrapper>
        {isOpen && <ArtworkDetail artwork={clickedArtwork} />}
    </div>
  );
};

export default Gallery;
