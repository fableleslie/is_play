import React from "react"
import { ActiveContainer, LiBord, DivBord } from "./StyledActive"
// import touxiang from "assets/images/mine/touxiang.png"
import { Picker, List } from 'antd-mobile';
import { ImagePicker } from 'antd-mobile';
// import { district, provinceLite } from 'antd-mobile-demo-data';
import { district } from 'antd-mobile-demo-data';
export default (props) => {
    let activityName;
    let activityTitle;
    let file;
    let activityType;
    let activityAddress;
    let activityIntro;
    return (
        <ActiveContainer>
            <DivBord className="header">
                <i onClick={props.back}>&#xe646;</i>
                <span>发布活动</span>
            </DivBord>
            <form action="submit"  name="mainForm" method="post" enctype="multipart/form-data">
                <ul>
                    <LiBord className="touWrap">
                        <span>活动图片</span>
                        <div className="touRight">
                            <ImagePicker
                             className="touxiang"
                            files={props.files}
                            onChange={props.onChange}
                            onImageClick={(index, fs) => props.recheck()}
                            selectable={props.files.length < 2}
                            multiple={props.multiple}
                            disableDelete={true}
                            length={1}
                            selectable={props.isSelect}
                            style={{width:".8rem"}}
                            />
                            {/* <input type="file" id="file" name="file" className="file"/> */}
                            <i>&#xe645;</i>
                        </div>
                    </LiBord>
                    <LiBord className="mainName">
                        <span>活动名称</span>
                        <input type="text" id="activityName" name="activityName" ref={(i) => (activityName = i)} />
                    </LiBord>
                    <LiBord className="mainShow">
                        <Picker data={props.catList} cols={1} {...props.getFieldProps('district3')} className="forss" onOk={e => props.changeType(props.catList[e[0]].label)}>
                            <List.Item arrow="horizontal" style={{ fontSize: ".17rem" }}>活动类型</List.Item>
                        </Picker>
                    </LiBord>
                    {/* <LiBord className="mainShow">
                    <span>主营类目</span>
                    <i>&#xe645;</i>
                </LiBord> */}
                    <LiBord className="mainInfo">
                        <span>活动主题</span>
                        <input placeholder="" id="activityTitle" name="activityTitle" ref={(input) => (activityTitle = input)}></input >
                    </LiBord>
                    <LiBord className="connect">
                        <span>活动简介</span>

                        <input placeholder="介绍一下自己的项目" id="activityIntro" name="activityIntro" ref={(input) => (activityIntro = input)}></input>
                    </LiBord>
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
                                <List.Item arrow="horizontal">活动地址</List.Item>
                            </Picker>
                            {/* <span>选择省市</span>
                        <p className="pickIcon">
                            <i>&#xe645;</i>
                        </p> */}
                        </LiBord>
                        <LiBord className="address">
                            <span>详细地址</span>
                            <input type="text" placeholder="填写你的详细地址" id="activityAddress" name="activityAddress" ref={(input) => (activityAddress = input)} />
                        </LiBord>
                    </ul>
                </ul>
                <div type="submit" className="finish" onClick={() => props.finish(activityName,activityTitle,activityAddress,activityIntro)}>
                    <span>完&ensp;成</span>
                </div>
            </form>
            <div className="mask" style={props.isShow ? { display: "block" } : { display: "none" }}>
                <div className="tip">
                    {/* 这里发送到后端之后要接受一个 */}
                    <h2>提交成功</h2>
                    <span onClick={props.goMain}>返回</span>
                </div>
            </div>
        </ActiveContainer>
    )
}