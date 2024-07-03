import React from 'react'
import { topbar_products } from '../../Data'
import './Topbar.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

const Topbar = ({category ,setcategory ,darkmode,prevsidebar}) => {
    return (
        <div className={`Topbar ${darkmode === 'light' ? 'lightmode' : 'darkmode'} ${prevsidebar ? "" : 'toggle_bar'}`}>
            <Swiper
                className={`topbar_slider ${darkmode==='light'?'':'darkmode'}`}
                slidesPerView={10}
                spaceBetween={40}
                slidesPerGroup={1}
                loop={true}
            >
                {
                    topbar_products.map((items, index) => {
                        return (
                            <SwiperSlide>
                                <li onClick={()=>{setcategory(items.id)}}>{items.name}</li>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>
    )
}

export default Topbar