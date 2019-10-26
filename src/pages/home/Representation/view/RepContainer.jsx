import React, { Component } from 'react';
import RepresentationUI from './RepresentationUI'
import {withRouter} from 'react-router'

class Representation extends Component {
    render() {
        return (
            <RepresentationUI goAllAct={this.goAllAct} toDetail={this.toDetail}></RepresentationUI>
        )
    }
    goAllAct= ()=>{
        this.props.history.push('/type/allAct')
    }
    toDetail= (id)=>{
        this.props.history.push('/details',id)
    }
}

export default withRouter(Representation);
