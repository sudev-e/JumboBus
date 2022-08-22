import React from 'react'
import './HomeSection.css'
import Swipers from './Swipers'
function HomeSections() {
  return (
    <div className='main-part  '> 
    <div className='offer-header'>
      <img src='../../../images/jumbooffers.png' alt=""></img>
      <span > Offers</span>
    </div>
    <div className='offer-parts'>
  <Swipers/>
    </div>
    </div>
  )
}

export default HomeSections