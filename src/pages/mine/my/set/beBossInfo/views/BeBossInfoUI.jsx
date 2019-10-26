import React from "react"
import { BeBossInfoContainer, LiBord, DivBord } from "./StyledBeBossInfo"
// import touxiang from "assets/images/mine/touxiang.png"
import { Picker, List } from 'antd-mobile';
// import { ImagePicker } from 'antd-mobile';
// import { district, provinceLite } from 'antd-mobile-demo-data';
import { district } from 'antd-mobile-demo-data';
export default (props) => {
    let name;
    let Intro;
    let Tel;
    // let provice;
    let address;
    return (
        <BeBossInfoContainer>
            <DivBord className="header">
                <i onClick={props.back}>&#xe646;</i>
                <span>商户资料</span>
            </DivBord>
            <ul>
                {/* <LiBord className="touWrap">
                    <span>我的头像</span>
                    <div className="touRight">
                        <ImagePicker
                            className="touxiang"
                            onChange={props.onChange}
                            files={props.files}
                            onImageClick={(index, fs) => console.log(index, fs)}
                            selectable={props.files.length < 2}
                            multiple={false}
                        />
                        <i>&#xe645;</i>
                    </div>
                </LiBord> */}
                <LiBord className="mainName">
                    <span>主办方名称</span>
                    <input type="text" ref={(i)=>(name=i)} />
                </LiBord>
                <LiBord className="mainShow">
                    <Picker data={props.catList} cols={1} {...props.getFieldProps('district3')} className="forss" onOk={e =>props.changeType( props.catList[e[0]].label)}>
                        <List.Item arrow="horizontal" style={{ fontSize: ".17rem" }}>主营类目</List.Item>
                    </Picker>
                </LiBord>
                {/* <LiBord className="mainShow">
                    <span>主营类目</span>
                    <i>&#xe645;</i>
                </LiBord> */}
                <LiBord className="mainInfo">
                    <span>主办方简介</span>
                    <input placeholder="描述一下自己吧"  ref={(input)=>(Intro=input)}></input >
                </LiBord>
                <li className="connect">
                    <span>联系电话</span>

                    <input placeholder="电话号码前加区号,多个号码请用 ; 隔开" ref={(input)=>(Tel=input)}></input>
                </li>
            </ul>
            <ul className="bottom">
                <ul>
                    <LiBord className="mainShow">
                        <Picker extra="请选择(可选)"
                            data={district}
                            cols={2}
                            title="Areas"
                            {...props.getFieldProps('district', {
                                initialValue: ['110000', '110100'],
                            })}
                            onOk={e => (
                               
                                console.log('ok', e)
                                )
                            }
                            onDismiss={e => console.log('dismiss', e)}
                        >
                            <List.Item arrow="horizontal">选择省市</List.Item>
                        </Picker>
                        {/* <span>选择省市</span>
                        <p className="pickIcon">
                            <i>&#xe645;</i>
                        </p> */}
                    </LiBord>
                    <LiBord className="address">
                        <span>详细地址</span>
                        <input type="text" placeholder="填写你的详细地址"  ref={(input)=>(address=input)}/>
                    </LiBord>
                </ul>
            </ul>
            <div className="finish" onClick={()=>props.finish(name,Intro,Tel,address)}>
                <span>完&ensp;成</span>
            </div>
            <div className="mask" style={props.isShow ? { display: "block" } : { display: "none" }}>
                <div className="tip">
                    {/* 这里发送到后端之后要接受一个 */}
                    <h2>提交成功</h2>
                    <span onClick={props.goMain}>返回</span>
                </div>
            </div>
        </BeBossInfoContainer>
    )
}