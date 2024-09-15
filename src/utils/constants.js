import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
import { RiTeamLine, RiHistoryFill } from "react-icons/ri";
export const links = [
  {
    id: 1,
    text: 'Pocetna',
    url: '/',
  },
  {
    id: 2,
    text: 'O nama',
    url: '/about',
  },
  {
    id: 3,
    text: 'Proizvodi',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'Misija',
    text:
      'Nasa misija je da ostanemo prvi na trzistu po cijenama i kvalitetu.',
  },
  {
    id: 2,
    icon: <RiTeamLine />,
    title: 'Nas Tim',
    text:
      'Tim nasih strucnjaka ce vam sa zadovoljstvom pomoci u vasem odabiru.',
  },
  {
    id: 3,
    icon: <RiHistoryFill />,
    title: 'Nasa istorija',
    text:
      'Za vas smo tu sa tradicijom dugom 15 godina, lideri u svom poslu.',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
