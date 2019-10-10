import React, { Component } from 'react'
import {SearchStyle,SearchPic} from '../../search/views/styleSearch'

export default class Search extends Component{
    render(){
        return (
            <SearchStyle>
                <div>
                    <SearchPic>
                        <div className="imgbox">&#xe652;</div> 
                    </SearchPic>
                    <input placeholder='中秋'></input>
                </div>
            </SearchStyle>
        )
    }
}
