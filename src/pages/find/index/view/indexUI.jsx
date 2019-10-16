import React  from 'react'
import SearchContainer from '../../search/search'
import HeadlinesContainer from '../../headlines/headlines'
import GuessLikeContainer from '../../guessLike/guesslike'
function Find(){
        return (
            <div style={{background:'#fff'}}>
            <SearchContainer></SearchContainer>
            <HeadlinesContainer></HeadlinesContainer>
            <GuessLikeContainer></GuessLikeContainer>
            </div>
        )
}
export default Find