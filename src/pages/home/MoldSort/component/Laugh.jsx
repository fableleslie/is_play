import laugh from 'images/love/laugh.jpg'
import React, { Component } from 'react';
import {LaughContainer} from './style'

export class Laugh extends Component {
    render() {
        return (
            <LaughContainer>
                <img src={laugh} alt=""/>
            </LaughContainer>
        )
    }
}

export default Laugh;
