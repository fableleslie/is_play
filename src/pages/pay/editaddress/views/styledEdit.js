import styled from 'styled-components'
import {styledIconOne}  from 'components/styles/icons.js'

const EditContainerUI = 
styledIconOne(
    styled.div`
        width:100%;
        height:100%;
        position:fixed;
        header{
            width:100%;
            height:.44rem;
            display:flex;
            justify-content:center;
            align-items:center;
            position:relative;
            background-color:#fff;
            >div{
                font-size:.18rem;
                color:#000000;
            }
            i{
                width:.15rem;
                height:.15rem;
                font-family:'iconfont' !important;
                position:absolute;
                left:.15rem;
                top:.15rem;
            }
            span{
                width: .34rem;
                height: .23rem;
                position:absolute;
                right:.15rem;
                top:.12rem;
                color:#C12929;
                font-size:.17rem;
            }
        }
        .header-bar{
            width:100%;
            height:.1rem;
            background-color:#F4F4F4;
        }
        main{
            .edit-content{
                width:100%;
                height:1.97rem;
                background-color:#fff;
                .test{
                    font-size:.17rem !important;
                }
            }
            .del-address{
                width:100%;
                height:.5rem;
                padding:.15rem 0 0 .15rem;
                background-color:#fff;
                span{
                    color:#C12929;
                } 
            }
        }
    `
)
   

export default EditContainerUI