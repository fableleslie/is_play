import React, { Component } from 'react';
import AllActUI from './AllActUI'

class AllAct extends Component {
    render() {
        return (
            <AllActUI goBack={this.backIndex}></AllActUI>
        )
    }
    backIndex = ()=>{
        this.props.history.goBack()
    }
}

export default AllAct;
