import React , { Component } from 'react'

import HostUI from './HostUI'

import BScroll from 'better-scroll'

import { ActionSheet } from 'antd-mobile';

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

export default class HostContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      clicked: 'none',
      clicked1: 'none',
      clicked2: 'none',
    }
  }

  render(){
    return(
      <HostUI
        goBack = {this.goBack}
        showActionSheet = {this.showActionSheet}
        toFans = {this.toFans}
        toEvaluation = {this.toEvaluation}
      ></HostUI>
    )
  }

  componentDidMount() {
    new BScroll( ".container" , {
      click: true,
      scrollY: true
    })
  }

  goBack = () => {
    this.props.history.goBack()
  }

  toFans = () => {
    this.props.history.push("/details/fans")
  }

  toEvaluation = () => {
    this.props.history.push("/details/evaluation")
  }

  showActionSheet = () => {
    const BUTTONS = ['分享', '联系TA', '成为商户', '取消'];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
      // destructiveButtonIndex: BUTTONS.length - 2,
      // title: 'title',
      message: '',
      maskClosable: true,
      'data-seed': 'logId',
      wrapProps,
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
    });
  }
}