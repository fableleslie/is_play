import React, { Component } from 'react';
import HomeUI from './HomeUI'

export class Home extends Component {
    render() {
        return (
            <HomeUI 
                {...this.props}
            ></HomeUI>
        )
    }
    componentDidMount(){

    }
}

export default Home;
