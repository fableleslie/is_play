import React from 'react'
import {SearchStyle,SearchPic} from '../../search/views/styleSearch'

function Search(props){
        return (
            <SearchStyle>
                <div onClick={props.handlerClick}>
                    <SearchPic>
                        <div className="imgbox">&#xe652;</div> 
                    </SearchPic>
                    <input placeholder='中秋'></input>
                </div>
            </SearchStyle>
        )
}
export default Search 
