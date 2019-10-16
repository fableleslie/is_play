import React, { Component } from 'react';
import {CryContainer} from './style'
import cry from 'images/love/cry.jpg'
class Cry extends Component {
    render() {
        return (
            <CryContainer>
                <img src={cry} alt=""/>
            </CryContainer>
        )
    }
}

export default Cry;
