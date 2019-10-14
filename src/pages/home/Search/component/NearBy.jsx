import React, { Component } from 'react';
import {NearByContainer} from './style'

class NearBy extends Component {
    render() {
        return (
            <NearByContainer>
                <div className='nearTop'>
                    <i>&#xe646;</i>
                    <span className='headline'>附近</span>
                    <span>排序</span>
                </div>
            </NearByContainer>
        )
    }
}

export default NearBy;
