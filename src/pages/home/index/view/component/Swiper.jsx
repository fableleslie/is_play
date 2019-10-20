import React, { Component } from 'react';
import banner from 'images/banner.png'
import banner1 from 'images/banner.png'
import banner2 from 'images/banner.png'
import Swiper from 'swiper/js/swiper.js'
export class SwiperContainer extends Component {
    render() {
        return (
            <div className="swiper-container1">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img src={banner} alt="星空美术馆" title='星空美术馆'/>
                    </div>
                    <div className="swiper-slide">
                        <img src={banner1} alt="星空美术馆" title='星空美术馆'/>
                    </div>
                    <div className="swiper-slide">
                        <img src={banner2} alt="星空美术馆" title='星空美术馆'/>
                    </div>
                </div>
                {/* <div class="swiper-pagination"></div> */}
            </div>
        )
    }
    componentDidMount(){
        new Swiper('.swiper-container1',{
            effect : 'fade',
            spaceBetween : 30,
            clickable : true,
        })
    }
}

export default SwiperContainer;
