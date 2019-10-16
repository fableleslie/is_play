import React , { Component } from 'react'

import HostUI from './HostUI'

export default class HostContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render(){
    return(
      <HostUI
        goBack = {this.goBack}
      ></HostUI>
    )
  }

  componentDidMount() {

  }

  goBack = () => {
    this.props.history.goBack()
  }
}