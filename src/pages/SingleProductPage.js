import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'


import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SingleProductPage = () => {

  const {id} = useParams()
  const history = useHistory()


  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct
   } = useProductsContext()

   useEffect(()=>{
    fetchSingleProduct(id)
   }, [id])

   useEffect(()=>{
      setTimeout(()=>{
        if(error){
          history.push("/")
        }
      }, 3000)
   }, [])

   const { name,stars, reviews, id: sku, company, images, price, stock,memory, ram,camera, baterija, sistem, smart, inca,voda } = product


  return loading ? <Loading /> :
  error ? <Error /> :
  <Wrapper>
    <PageHero title={product.name?.toUpperCase()} product={product} />
    <section className='section section-center page'>
      <Link to='/products' className='btn'>
        Nazad na proizvode
      </Link>
      <div className='products-center'>
        <ProductImages images={images}/>
        <div className='content'>
          <h2>{product.name}</h2>
          <Stars stars={stars} reviews={reviews}/>
          <h5 className='price'>{formatPrice(product.price)}</h5>
          <p className='desc'>{product.description}</p>
          <p className='info'>
            <span>dostupno:</span>
            {product.stock > 0 ? `${product.stock} proizvoda na stanju` : "Nije na stanju"}
          </p>
          <p className='info'>
            <span>ID : </span>
            {product.id}
          </p>
          <p className='info'>
            <span>Brend:</span>
            {product.company}
          </p>
          {product.memory && (
              <p className='info'>
              <span>Memorija: </span>
              {product.memory} GB
              </p>
          )}
          {product.ram && (
              <p className='info'>
              <span>Ram: </span>
              {product.ram} GB
              </p>
          )}
          {product.camera && (
              <p className='info'>
              <span>Kamera: </span>
              {product.camera} Mpx
              </p>
          )}
          {product.baterija && (
              <p className='info'>
              <span>Baterija: </span>
              {product.baterija} MAH
              </p>
          )}
          {product.sistem && (
              <p className='info'>
              <span>Sistem: </span>
              {product.sistem}
              </p>
          )}
          {product.smart !== undefined && (
          <p className='info'>
          <span>Smart: </span>
          {product.smart ? 'Da' : 'Ne'}
           </p>
           )}
          {product.inca && (
              <p className='info'>
              <span>Inca: </span>
              {product.inca}"
              </p>
          )}
          {product.voda !== undefined && (
          <p className='info'>
          <span>Vodootpornost: </span>
          {product.voda ? 'Da' : 'Ne'}
           </p>
           )}


          <hr />
          {product.stock && <AddToCart product={product}/>}
        </div>
      </div>
    </section>
  </Wrapper>
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
