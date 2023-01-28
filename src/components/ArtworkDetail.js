import React, { useState } from 'react';
import styled from 'styled-components';

const ArtworkDetail = ({ artwork }) => {
    console.log(artwork.title);
    return (
      <ArtworkDetailContainer className='card'>
        <ArtworkImage className='card' src={artwork.url} />
        <ArtworkInfo>
            <p>{artwork.price || "Price"}</p>
            <h2>{artwork.title || "Title"}</h2>
            <p>{artwork.description || "Description"}</p>
          </ArtworkInfo>
      </ArtworkDetailContainer>
    );
  };
  

const ArtworkDetailContainer = styled.div`
    position: fixed;
    font-size: 1.6rem;
    padding: 1rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    background-color: #c46aba;

    @media (max-width: 600px) {
      font-size: 1.2rem;
      padding: 1rem;
    }
`;

export const ArtworkImage = styled.img`
  width: 100%;
  position: relative;
  cursor: pointer;
  border: 
  transition: transform 0.3s ease-in-out;
  background-color: blue;
  z-index: 2;
    &:hover {
        transform: scale(1.1);
    }
`;

const ArtworkInfo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  top: 0;
  left: 0;
  background: transparent;
  padding: 1rem;
  width: 100%;
  height: 100%;
  p:last-of-type {
    margin-bottom: 2rem;
  }
  h2, p {
    position: relative;
    z-index: 5;
    margin-left: 2rem;
  }
  h2 {
    font-size: 2rem;
  }
  p {
    font-size: 1.6rem;
  }
`;


export default ArtworkDetail;
