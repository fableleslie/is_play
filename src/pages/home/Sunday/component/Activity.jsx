import React, { Component } from 'react';
import ActivityContainer from './styleActivity'
import {Address} from '../view/styleSunday'

class Activity extends Component {
    render() {
        return (
            <ActivityContainer>
                <div className='pic'>
                    <img src={this.props.pic} alt=""/>
                </div>
                <p>{this.props.title}<span className={this.props.site ? "abc" : null}></span>{this.props.site}</p>
                <Address>
                    <div className='left'>
                        <i className='address'>&#xe667;</i>
                        <span className='direction'>{this.props.address}</span>
                        <i className='time'>&#xe605;</i>
                        <span className='state'>{this.props.time}</span>
                    </div>
                    <span className='price'>￥ {this.props.price}</span>
                </Address>
                <div className='btn'>{this.props.btn}</div>
            </ActivityContainer>
        )
    }
}

export default Activity;
