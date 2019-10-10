import React , {Component} from 'react'
import SearchContainer from '../../search/search'
import HeadlinesContainer from '../../headlines/headlines'
import GuessLikeContainer from '../../guessLike/guesslike'
export default class Find extends Component{
    render(){
        return (
            <div style={{background:'#fff'}}>
            <SearchContainer></SearchContainer>
            <HeadlinesContainer></HeadlinesContainer>
            <GuessLikeContainer></GuessLikeContainer>
            </div>
        )
    }
}