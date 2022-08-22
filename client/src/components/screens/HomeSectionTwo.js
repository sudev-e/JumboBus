import React from 'react'
import './HomeSectionTwo.css'
import SwiperRtc from './SwiperRtc'
function HomeSectionTwo() {
  return (
    <div className='rtc-part'>
         <div className='rtc-header'>
        <h2>Book SRTC </h2>
      <span >( State Road Transport Corporation ) Bus ticket At jumbOBus</span>
    </div>
    <div className='rtc-body'>
         <SwiperRtc/>
    </div>
    </div>
  )
}

export default HomeSectionTwo