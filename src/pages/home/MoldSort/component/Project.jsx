import React, { Component } from 'react';
import ProjectContainer from './style'
import time from 'images/timg.gif'

class Project extends Component {
    state = {
        Activity : []
    }

    render() {
        if(this.props.Activity.length === 0 ){
            return <div className='loading'><img src={time} alt=""/></div>
        }
        else{
            return (
                <ProjectContainer>
                    {
                        (this.props.Activity).map((value,index)=>{
                            return (<div className='item' key={index}>
                                <div className='leftImg'>
                                    <img src={value.imgurl} alt=""/>
                                </div>
                                <div className='rightName'>
                                    <p className='title'>{value.title}<span className={value.site === "" ? null : 'circle'}></span>{value.site}</p>
                                    <p className='address'>{value.address}</p>
                                    <p className='time'>
                                        <span>{value.state}</span>
                                        <span>￥{value.price}</span>
                                    </p>
                                </div>
                            </div>)
                        })
                    }
                </ProjectContainer>
            )
        }
    }
}

export default Project;
