import React, { Component } from 'react';
import SortUI from './SortUI'

export class Sort extends Component {
    render() {
        return (
            <SortUI 
                goDetail={this.change}
            ></SortUI>
        )
    }
    change = (data)=>{
        this.props.history.push(`/index/moldSort/type${data}?order=-1`)
    }
}

export default Sort;
