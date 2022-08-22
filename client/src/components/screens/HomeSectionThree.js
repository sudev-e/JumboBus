import React from 'react'
import './HomeSectionThree.css'
function HomeSectionThree() {
  return (
    <div className='promise-main'>
         <div className='img-header'>
            <img alt='header' src='../../../images/promise.png'></img>
         </div>
       <div className='promise-text'>  
       <h1>
            WE PROMISE TO DELIVER
         </h1></div>
         <div className='row main-content'>
            <div className='col-md-3 col-sm-12 content '>
           <div className='contents-img'>
            <img src='https://s2.rdbuz.com/web/images/home/benefits.png' alt='cont-imag'></img>
            <p>UNMATCHED BENEFITS</p>
            <span> We take care of your travel beyond ticketing by providing you with innovative and unique benefits.
</span>
           </div>
            </div>
            <div className='col-md-3 col-sm-12  content'>
            <div className='contents-img'>
            <img src='https://s1.rdbuz.com/web/images/home/customer_care.png' alt='cont-imag'></img>
            <p>SUPERIOR CUSTOMER SERVICE</p>
            <span>We put our experience and relationships to good use and are available to solve your travel issues.

</span>
           </div>
            </div>
            <div className='col-md-3 col-sm-12  content '>
            <div className='contents-img'>
            <img src='https://s1.rdbuz.com/web/images/home/lowest_Fare.png' alt='cont-imag'></img>
            <p>LOWEST PRICE</p>
            <span> 
                        We always give you the lowest price with the best partner offers. 
                    
</span>
           </div>
            </div>
         </div>
    </div>
  )
}

export default HomeSectionThree