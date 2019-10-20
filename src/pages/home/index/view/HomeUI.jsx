import React, { Component } from 'react';
import { HomeContainer,SwiperContainer } from './styleHome'
import Top from '../../Top/Top'
import Sort from '../../Sort/index'
import {Represention} from '../../Representation/index'
import Battle from '../../Battle/index'
import {Sunday} from '../../Sunday/index'
import Swiper from './component/Swiper'


class HomeUI extends Component {
    render() {
        return (
            <HomeContainer>
                <Top {...this.props}></Top>
                <div className='container'>
                    <SwiperContainer>
                        <Swiper></Swiper>
                        <div className='bg'></div>
                    </SwiperContainer>
                    <Sort {...this.props}></Sort>
                    <Represention></Represention>
                    <Battle></Battle>
                    <Sunday></Sunday>
                </div>
            </HomeContainer>
        )
    }
}

export default HomeUI;
