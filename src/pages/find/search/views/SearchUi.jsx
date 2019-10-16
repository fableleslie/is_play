import React from 'react'
import {SearchStyle,SearchPic} from '../../search/views/styleSearch'

function Search(){
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
export default Search 
