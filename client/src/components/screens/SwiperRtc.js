import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SwiperRtc.css";

// import required modules
import { Pagination, Navigation  } from "swiper";

const SwiperRtc = ({heading,body}) => {
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
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        <div>
        <SwiperSlide>
            <div className="rtc-list-main">
        <img src="https://imgs.search.brave.com/SCAo779k23CAfKhRtb-MQJnNP9oRn-gNydJoDrJrqM0/rs:fit:847:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC44/U2hUOG9DdllkUXlP/LTdPb3hUTE9BSGFF/SiZwaWQ9QXBp" alt=''/>
        </div>
        <div className="rtc-list-sub">
            <p>KSRTC</p>
        </div>
        </SwiperSlide>
        </div>
        <SwiperSlide>
            <div className="rtc-list-main">
        <img src=" https://imgs.search.brave.com/AxCMP8Nl6DGX1C5VyxBq6c02-qBI4llgLaEXmYkEtEI/rs:fit:495:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC55/eV8wOGZ6MXUwQzk0/UEVUZnFNMkJnSGFI/RiZwaWQ9QXBp" alt=''/>
        </div>
        <div className="rtc-list-sub">
            <p>TSRTC</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="rtc-list-main">
        <img src=" https://imgs.search.brave.com/Rm7RD-mWkiWNwVRCQwc9KwhRkKaJSFHalv4GDmUWypg/rs:fit:1106:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4x/em44eUxLdDc4d2Qx/ZjNPMzFHRXZnSGFE/TCZwaWQ9QXBp" alt=''/>
        </div>
        <div className="rtc-list-sub">
            <p>MSRTC</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="rtc-list-main">
        <img src="https://imgs.search.brave.com/3N2QSZsbQkDL5rHb_FcygK7M8QNMOyWDfcEnj06o9j0/rs:fit:300:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/UE5aeGNZVHdXWW01/YnZQS243V3VnQUFB/QSZwaWQ9QXBp" alt=''/>
        </div>
        <div className="rtc-list-sub">
            <p>APSRTC</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="rtc-list-main">
        <img src=" https://imgs.search.brave.com/BkZK8SbDE12-vP-V1Ksa_DokvBKgzJ3xOR9QOQ5h_1g/rs:fit:450:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5o/ZEZjVnB5UjM1SnhF/SU5JamFZRkRRQUFB/QSZwaWQ9QXBp" alt=''/>
        </div>
        <div className="rtc-list-sub">
            <p>HSRTC</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="rtc-list-main">
        <img src=" https://imgs.search.brave.com/e13I5NaE737HVLWPPMNuJDDZArMfs_VwATOjzIuFYvk/rs:fit:250:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5l/SUU3LVB0dGNCOVFn/eFozYjZ2VW13QUFB/QSZwaWQ9QXBp" alt=''/>
        </div>
        <div className="rtc-list-sub">
            <p>GSRTC</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="rtc-list-main">
        <img src=" https://imgs.search.brave.com/MdCZO5q8NMvBquf_6jHvhkgxINCslh11pC18ez32UWs/rs:fit:450:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5X/dGxXOFV3R2xob0hx/MXdXZXE4YzdRQUFB/QSZwaWQ9QXBp" alt=''/>
        </div>
        <div className="rtc-list-sub">
            <p>UPSRTC</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="rtc-list-main">
        <img src="https://imgs.search.brave.com/ZQ1ucxapWpARrEFksBrGOZIxrCSU1gBnSq5IV_YWUdg/rs:fit:877:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5L/WmdjZXdrWGxNaEI0/M0lqSENGQ3hBSGFF/QSZwaWQ9QXBp" alt=''/>
        </div>
        <div className="rtc-list-sub">
            <p>KSRTC</p>
        </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
    </div>
    </div>
  )
}

export default SwiperRtc