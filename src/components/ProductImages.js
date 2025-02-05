
import React, { useState } from 'react'
import styled from 'styled-components'
import Loading from './Loading';

const ProductImages = ({images = [{url:""}]}) => {
  const [main, setMain] = useState(images[0])


  return images ? <Wrapper>
    <img src={main.url} alt='main-image' className='main'/>
    <div className='gallery'>
      {images.map((item,index)=>{
        return <img src={item.url} alt='slika' key={index}
        className={`${item.url === main.url ? "active" : null}`}
        onClick={()=>{
          setMain(item)
        }} />
      })}
    </div>
  </Wrapper> : <Loading />
}

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: contain;
    padding: 10px;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`

export default ProductImages
