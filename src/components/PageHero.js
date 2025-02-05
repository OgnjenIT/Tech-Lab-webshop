import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({title, product}) => {
  return <Wrapper>
    <div className='section-center'>
      <h3>
        <Link to='/'>Pocetna</Link> 
        {product && <Link to='/products'>/  Proizvodi </Link>} / {title} 
      </h3>
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  background: var(--clr-primary-1);
  width: 100%;
  min-height: 12vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-9);
  a {
    color: var(--clr-primary-9);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-4);
  }
`

export default PageHero
