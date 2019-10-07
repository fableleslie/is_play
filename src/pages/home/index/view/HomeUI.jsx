import React, { Component } from 'react';
import { HomeContainer,SwiperContainer } from './styleHome'
import Top from '../../Top/Top'
// import Foot from '../../Foot/Foot'
import Sort from '../../Sort/view/Sort'
import {Represention} from '../../Representation/index'
import Battle from '../../Battle/index'

class HomeUI extends Component {
    render() {
        return (
            <HomeContainer>
                <Top></Top>
                <div className='container'>
                    <SwiperContainer>
                        <img src="https://upload-images.jianshu.io/upload_images/18974629-36c6b63667864cfe.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt=""/>
                        <div className='bg'></div>
                    </SwiperContainer>
                    <Sort {...this.props}></Sort>
                    <Represention></Represention>
                    <Battle></Battle>
                </div>
                {/* <Foot></Foot> */}
            </HomeContainer>
        )
    }
}

export default HomeUI;
