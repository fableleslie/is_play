import React , { Component } from 'react'

import {
    HostContainer,
    HostHead
} from './styledHost'

export default class HostUI extends Component{
  render(){
      let { goBack } = this.props
    return(
      <HostContainer>
          <HostHead>
              <i id="back" onClick={goBack}>&#xe646;</i>
              <i id="more">···</i>
          </HostHead>
      </HostContainer>
    )
  }
}