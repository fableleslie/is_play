import React from "react"
import { EditContainer, DivBord, LiBord } from "./StyledEdit"
import touxiang from "assets/images/mine/touxiang.png"
import {  Modal, Toast } from 'antd-mobile';
import { ImagePicker } from 'antd-mobile';
const prompt = Modal.prompt;
const alert = Modal.alert;
export default (props) => {
    return (
        <EditContainer>
            <DivBord className="header">
                <i onClick={props.back}>&#xe646;</i>
                <span>玩家资料</span>
            </DivBord>
            <ul>
                <LiBord className="touWrap">
                    <span>我的头像</span>
                    <div className="touRight">
                            <ImagePicker
                             className="touxiang"
                            files={props.files}
                            onChange={props.onChange}
                            onImageClick={(index, fs) => console.log(index, fs)}
                            selectable={props.files.length < 3}
                            multiple={props.multiple}
                            disableDelete={false}
                            />
                        <div className="touxiang">
                            <img src={touxiang} alt="" />
                        </div>
                        <i>&#xe645;</i>
                    </div>
                </LiBord>

                <LiBord className="editName">
                    <span>昵称</span>
                    <div onClick={() => prompt('昵称', '请输入您的昵称',
                        [
                            {
                                text: '关闭',
                                onPress: value => new Promise((resolve) => {
                                    resolve();
                                }),
                            },
                            {
                                text: '确定',
                                onPress: value => new Promise((resolve, reject) => {
                                    Toast.info('修改成功', 1);
                                    props.setName(value)
                                    resolve();
                                }),
                            },
                        ], 'default', null, [props.name])}
                        className="nameWrap"
                    >
                        <span >{props.name}</span>
                        <span className="editNameIcon">&#xe645;</span>
                    </div>
                </LiBord>
                <LiBord className="editSex">
                    <span>性别</span>

                    <div
                        onClick={() =>
                            alert('性别', <div></div>, [
                                { text: '男', onPress: () => props.setSex('男') },
                                { text: '女', onPress: () => props.setSex("女") },
                                { text: '暂不选择', onPress: () => props.setSex('') },
                            ])
                        }
                    >
                        <span>{props.sex}</span>
                       <span  className="editNameIcon">&#xe645;</span>
                  </div>
                </LiBord>
            </ul>
        </EditContainer>
    )
}