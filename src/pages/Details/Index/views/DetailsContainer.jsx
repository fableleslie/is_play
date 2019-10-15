import React , { Component } from 'react'
import DetailsUI from './DetailsUI'

import { withRouter } from 'react-router-dom'

import connect from './connect'

@connect
class DetailsContainer extends Component{

  render(){
    let path = this.props.match.path
    return(
      <DetailsUI
        changeComponent={this.handleClick}
        path = { path }
        changeHeaderBackground={this.hanldeScroll}
        join = { this.iWantJoin }
      ></DetailsUI>
    )
  }

  componentDidMount() {
    let meta = this.props.location.state === undefined ? 1 : this.props.location.state.meta;
    this.props.changeMeta(meta)

  }

  hanldeScroll() {
    let main = document.getElementsByTagName('main')[0]
    let back = document.getElementById('back')

    if(main.scrollTop > 250){
      back.style.color = "#000"
    }else{
      back.style.color = "#fff"
    }
  }

  iWantJoin = () => {
    this.props.history.push('/pay')
  }
  
  handleClick = (e) => {
    var target = e.target;
    var meta = target.getAttribute('meta');
    var _path = target.getAttribute('path');

    var data = {meta};
    var path = {
      pathname:`${this.props.match.path}/${_path}`,
      state:data,
    }
    this.props.history.push(path);

    var slideChildren = document.getElementById('slide').getElementsByTagName('li');
    var slider = document.getElementById('slider');
    
    var childrenArray = Array.from(slideChildren)
    childrenArray.forEach((item , index) => {
      if(index + 1 === parseInt(meta)){
        item.setAttribute('class' , 'active')
        slider.style.left = 0.95 * index + 0.12 + 'rem'
      }else{
        item.setAttribute('class' , '')
      }
    })
  }
}
export default withRouter(DetailsContainer)