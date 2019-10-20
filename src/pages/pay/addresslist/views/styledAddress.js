import styled from 'styled-components'
import {styledIconOne}  from 'components/styles/icons.js'

const AddresUIContainer = 
styledIconOne(
    styled.div`
        width:100%;
        height:100%;
        position:fixed;
        header{
            width:100%;
            height:.44rem;
            background-color:#fff;
            display:flex;
            align-items:center;
            justify-content:center;
            position: relative;
            i{
                width:.19rem;
                height:.19rem;
                font-family:'iconfont' !important;
                font-size:.18rem;
                position:absolute;
                left:.15rem;
                top:.15rem;
                font-weight:700;
            }
            span{
                position:absolute;
                right:.15rem;
                top:.15rem;
                font-size:.13rem;
            }
            div{
                font-size:.17rem;
                font-weight:550;
            }
        }
        main{
            .address-bar{
                width:100%;
                height:.1rem;
                background-color:#F4F4F4;
            }
            ul{
                width:100%;
                .order-address{
                    width:100%;
                    height:.84rem;
                    background-color:#fff;
                    padding:.1rem .1rem .11rem .16rem;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    border-bottom:1px solid #D6D5D5;
                    span{
                        font-family: 'iconfont' !important;
                        width:.38rem;
                        height:.38rem;
                        font-size:.38rem;
                        color:#FFE60D;
                        margin-right:.23rem;
                    }
                    .address-desc{
                        flex:1;
                        .desc-name{
                            font-size:.15rem;
                            color:#777777;
                        }
                        i{
                            color:#B7B7B7;
                            font-size:.14rem;
                        }
                        .desc-content{
                            color:#B7B7B7;
                        }
                    }
                    .li-bar{
                        width:1px;
                        height:.3rem;
                        background-color:#D6D5D5;
                    }
                    .yo-ico{
                        width:.4rem;
                        height:.16rem;
                        line-height:.16rem;
                        text-align:center;
                        font-size:.14rem;
                        color:#B7B7B7;
                    }
                }
            }
        }
    `
)
  


export default AddresUIContainer