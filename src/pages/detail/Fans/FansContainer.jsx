import React , { Component } from 'react'

import FansUI from './FansUI'

export default class  extends Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render(){
    return(
      <FansUI
        goBack={this.goBack}
      ></FansUI>
    )
  }

  goBack = () => {
      this.props.history.goBack()
  }

  componentDidMount() {

  }
}