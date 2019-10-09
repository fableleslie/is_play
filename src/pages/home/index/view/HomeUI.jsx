import React, { Component } from 'react';
import { HomeContainer,SwiperContainer } from './styleHome'
import Top from '../../Top/Top'
import Sort from '../../Sort/view/Sort'
import {Represention} from '../../Representation/index'
import Battle from '../../Battle/index'
import banner from 'images/banner.png';

class HomeUI extends Component {
    render() {
        return (
            <HomeContainer>
                <Top></Top>
                <div className='container'>
                    <SwiperContainer>
                        <img src={banner} alt="星空美术馆" title='星空美术馆'/>
                        <div className='bg'></div>
                    </SwiperContainer>
                    <Sort {...this.props}></Sort>
                    <Represention></Represention>
                    <Battle></Battle>
                </div>
            </HomeContainer>
        )
    }
}

export default HomeUI;
