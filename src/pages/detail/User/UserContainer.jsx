import React , { Component } from 'react'

import UserUI from './UserUI'

import BScroll from 'better-scroll'

export default class  extends Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render(){
    return(
      <UserUI
        path = {this.props.match.path}
        goBack = {this.goBack}
        changeComponent = {this.handleClick}
      ></UserUI>
    )
  }

  componentDidMount() {
    new BScroll(".container" , {
      click: true
    })
  }

  goBack = () => {
    this.props.history.goBack()
  }

  handleClick = (e) => {
    var target = e.target
    var path = this.props.match.path
    
    if(target.getAttribute('path') === null){
      target=target.parentNode;
    }

    var _path = target.getAttribute('path');
    this.props.history.push(`${path}/${_path}`)

    var childrenNode = document.getElementsByClassName('collection-follow-evaluation')[0].getElementsByTagName('div')
    var childrenArray = Array.from(childrenNode);

    childrenArray.forEach((item) => {
      if(item.getAttribute('path') === _path){
        item.classList.add('active')
      }else{
        item.classList.remove('active')
      }
    })
  }
}