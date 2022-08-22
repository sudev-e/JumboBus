import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swipers.css";

// import required modules
import { Pagination, Navigation  } from "swiper";

const Swipers = ({heading,body}) => {
  return (
    <div className="container ps-4 pt-2 mb-4 pb-5">
        
        <div className="row ">
          
          <div className="col-12 col-md-10 d-flex justify-content ">
       <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        <div>
        <SwiperSlide>
          <div className="">
        <img className="" src="https://static.abhibus.com/busgallery/offerbanners/Jul2022/01/1656679914/get300_476x220.webp" alt=''/>
        </div>
        </SwiperSlide>
        </div>
        <SwiperSlide>
        <img src="https://static.abhibus.com/busgallery/offerbanners/Aug2022/06/1659769834/476x220%20copy.webp" alt=''/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://static.abhibus.com/busgallery/offerbanners/Oct2021/31/1635683656/476X220.png" alt=''/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://static.abhibus.com/busgallery/offerbanners/May2022/18/1652881214/476-220.jpg" alt=''/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://static.abhibus.com/busgallery/offerbanners/Jul2022/01/1656668379/476X220.webp" alt=''/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://static.abhibus.com/busgallery/offerbanners/Jul2022/21/1658401423/476x220.webp" alt=''/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://st.redbus.in/Images/RHSS/2022/hero/274x147.png" alt=''/>
        </SwiperSlide>
        <SwiperSlide>
            <img src=" https://st.redbus.in/Images/INDOFFER/SUPERHIT/1_1.png" alt=''/>
            </SwiperSlide>
        <SwiperSlide>
        <img src="https://st.redbus.in/Images/INDOFFER/SUPERHIT/1_1.png" alt=''/>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
    </div>
  )
}

export default Swipers