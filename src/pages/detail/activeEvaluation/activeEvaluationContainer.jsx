import React , { Component } from 'react'

import ActiveEvaluationUI from './activeEvaluationUI'

export default class  extends Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render(){
    return(
      <ActiveEvaluationUI
        back = {this.handleClick}
      ></ActiveEvaluationUI>
    )
  }

  componentDidMount() {

  }

  handleClick = () => {
    this.props.history.goBack();
  }
}