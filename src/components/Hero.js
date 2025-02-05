import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/tech2.jfif'
import heroBcg2 from '../assets/tech1.jpg'

const Hero = () => {
  return <Wrapper className='section-center'> 
  <div className='content'>
    <h1>Najbolje cijene i <br></br> kvalitet u BiH</h1>
    <p>
      Id culpa nulla consectetur irure pariatur deserunt in officia id voluptate ex.
      Ullamco esse enim ex exercitation duis aute duis anim id enim irure elit id.
      Ea proident est sit excepteur ipsum.
    </p>
    <Link to='/products' className="btn hero-btn">
     Kupi sada
    </Link>
  </div>
  <article className='img-container'>
    <img src={heroBcg} alt='main-img' className='main-img'/>
    <img src={heroBcg2} alt='accent-img' className='accent-img'/>
  </article>
  </Wrapper>
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`

export default Hero
