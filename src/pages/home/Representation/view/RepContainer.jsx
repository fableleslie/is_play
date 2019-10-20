import React, { Component } from 'react';
import RepresentationUI from './RepresentationUI'
import {withRouter} from 'react-router'

class Representation extends Component {
    render() {
        return (
            <RepresentationUI goAllAct={this.goAllAct}></RepresentationUI>
        )
    }
    goAllAct= ()=>{
        this.props.history.push('/type/allAct')
    }
}

export default withRouter(Representation);
