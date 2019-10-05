import React from 'react'

import EidtContainerUI from './styledEdit'
import { List, InputItem } from 'antd-mobile';

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

function editUI(props){
    return(
        <EidtContainerUI>
            <header>
                <i onClick={props.comeBack}>&#xe646;</i>
                <div>编辑收货地址</div>
                <span>保存</span>
            </header>
            <div className="header-bar"></div>
            <main>
                <div className="edit-content">
                    <List>
                    <InputItem
                        placeholder='预订人姓名'
                        clear
                        onChange={(v) => { console.log('onChange', v); }}
                        onBlur={(v) => { console.log('onBlur', v); }}
                        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                    >姓名</InputItem>
                    <InputItem
                        placeholder='输入手机'
                        clear
                        onChange={(v) => { console.log('onChange', v); }}
                        onBlur={(v) => { console.log('onBlur', v); }}
                        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                    >手机</InputItem>
                    <InputItem
                        placeholder='选择地区'
                        clear
                        onChange={(v) => { console.log('onChange', v); }}
                        onBlur={(v) => { console.log('onBlur', v); }}
                        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                    >所在地区
                    
                    </InputItem>
                    <InputItem
                        placeholder='填写地址'
                        clear= {true}
                        onChange={(v) => { console.log('onChange', v); }}
                        onBlur={(v) => { console.log('onBlur', v); }}
                        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                    >详细地址</InputItem>
                    </List>
                </div>
                <div className="header-bar"></div>
                <div className="del-address"><span>删除收货地址</span></div>
            </main>
            

            
        </EidtContainerUI>
    )
}

export default editUI
