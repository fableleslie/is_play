import styled from 'styled-components'


import {styledIconOne}  from 'components/styles/icons.js'

import border from 'components/styles/border'

const PayContainer = 
styledIconOne(
    styled.div`
        font-family:Microsoft YaHei;
        width:100%;
        height:100%;
        position: fixed;
        display:flex;
        background:#f4f4f4;
        flex-direction: column;
        header{
            width:100%;
            height: .44rem;
            position:relative;
            background-color:#fff;
            display:flex;
            justify-content: center;
            align-items:center;
            border-bottom:1px solid #f4f4f4;
            span{
                font-family: 'iconfont' !important;
                font-size:.16rem;
                font-weight:600;
                width: .15rem;
                height: .15rem;
                position:absolute;
                left: .15rem;
                top:.15rem;
            }
            div{
                font-size:.17rem;
                font-weight:550;
                font-family:Microsoft YaHei;
            }
        }
        main{
            flex:1;

            .pay-active{
                width:100%;
                height: .75rem;
                display:flex;
                background-color:#fff;
                .active-pic{
                    margin:.13rem .1rem .13rem .15rem;
                    width:.5rem;
                    height:.5rem;
                }
                .active-desc{
                    width:2.73rem;
                    height:.2rem;
                    margin-top:.29rem;
                    font-size:.15rem;
                    font-weight: 540;
                }
            }
            .select-ticket{
                width:100%;
                height:1.55rem;
                .select-title{
                    width:100%;
                    height:.3rem;
                    
                    display:flex;
                    align-items:center;
                    span{
                        font-size:.12rem;
                        color:#B7B7B7;
                        margin-left: .15rem;
                    }
                }
                .select-content{
                    width:100%;
                    height:1.25rem;
                    padding:.15rem;
                    background-color:#fff;
                    li:nth-child(2n+1){
                        margin-right:.1rem;
                    }
                    li:nth-child(1){
                        margin-bottom:.1rem;
                        
                    }
                    li:nth-child(2){
                        margin-bottom:.1rem;
                        
                    }
                    li{
                        width:48.5%;
                        height:.43rem;
                        border:1px solid #ccc;
                        border-radius:.08rem;
                        float:left;
                        text-align:center;
                        line-height:.43rem;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        flex-direction:column;
                        div{
                            height:.2rem;
                            font-size:.15rem;
                            text-align:left;
                        }
                        p{
                            font-size:.12rem;
                            color:#707070;
                        }
                    }
                    li.active{
                        color:#FF7011;
                        border:1px solid #FF7011;
                        p{
                            color:#FF7011;
                        }
                    }
                    
                }
            }
            .select-date{
                width:100%;
                height:.95rem;
                .select-title{
                    width:100%;
                    height:.3rem;
                    
                    display:flex;
                    align-items:center;
                    span{
                        font-size:.12rem;
                        color:#B7B7B7;
                        margin-left: .15rem;
                    }
                }
                .date-content{
                    width:100%;
                    height:.65rem;
                    background:#fff;
                    padding:.15rem;
                    li:nth-child(2n+1){
                        margin-right:.1rem;
                    }
                    li.active{
                        color:#FF7011;
                        >div{
                            color:#FF7011;
                        }
                        border:1px solid #FF7011;
                        p{
                            color:#FF7011;
                        }
                    }
                    li{
                        width:48%;
                        height:.35rem;
                        border:1px solid #ccc;
                        border-radius:.08rem;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        flex-direction:column;
                        float:left;
                        div{
                            width:.72rem;
                            height:.16rem;
                            font-size:.12rem;
                            color:#777777;
                        }
                        p{
                            width:.36rem;
                            height:.16rem;
                            font-size:.12rem;
                            color:#777777;
                        }
                    }
                }
            }

            .select-time{
                width:100%;
                min-height:.9rem;
                display:flex;
                flex-direction:column;
                .select-title{
                    width:100%;
                    height:.3rem;
                    
                    display:flex;
                    align-items:center;
                    span{
                        font-size:.12rem;
                        color:#B7B7B7;
                        margin-left: .15rem;
                    }
                }
                .time-content{
                    width:100%;
                    min-height:.6rem;
                    background-color:#fff;
                    padding:.15rem;
                    li:nth-child(2n+1){
                        margin-right:.1rem;
                    }
                    li.active{
                        color:#FF7011;
                        >div{
                            color:#FF7011;
                        }
                        border:1px solid #FF7011;
                        p{
                            color:#FF7011;
                        }
                    }
                    li{
                        width:48%;
                        height:.3rem;
                        border:1px solid #ccc;
                        border-radius:.08rem;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        flex-direction:column;
                        float:left;
                        div{
                            width:.72rem;
                            height:.16rem;
                            font-size:.12rem;
                            color:#777777;
                        }
                    }
                }
            }

            .active-count{
                width:100%;
                height:.8rem;
                .count-title{
                    width:100%;
                    height:.3rem;
                    display:flex;
                    align-items:center;
                    span{
                        font-size:.12rem;
                        color:#B7B7B7;
                        margin-left: .15rem;
                    }
                }
                .count-container{
                    width:100%;
                    height:.5rem;
                    background-color:#fff;
                    padding:.14rem .15rem;
                    display:flex;
                    .count-incre{
                        width:.22rem;
                        height:.22rem;
                        border:1px solid #ccc;
                        
                        text-align:center;
                        line-height:.22rem;
                        font-size:.22rem;
                        color:#ccc;
                    }
                    span{
                        width:.44rem;
                        height:.22rem;
                        border:1px solid #ccc;
                        margin-right:.1rem;
                        text-align:center;
                        line-height:.22rem;
                        color:#988;
                    }
                    span.active{
                        color:#FF7011;
                    }
                    .count-decre{
                        width:.22rem;
                        height:.22rem;
                        border:1px solid #ccc;
                        text-align:center;
                        line-height:.22rem;
                        font-size:.22rem;
                        color:#ccc;
                        margin-right:.1rem;
                    }
                }
            }
        }
        footer{
            width:100%;
            height:.63rem;
            padding-top:.14rem;
            background-color:#fff;
            .next-stup-box{
                width:100%;
                height:100%;
                display:flex;
                .all-price{
                    flex:1;
                    padding:.14rem 0 .14rem .15rem;
                    span{
                        color:#FF6600;
                        font-size:.16rem;
                    }
                }
                .next-stup{
                    width:2.1rem;
                    height:.49rem;
                    background-color:#FFE60D;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    font-size:.16rem;
                    color:#0D0D0D;
                    font-family:Microsoft YaHei;
                }
            }
        }
    `
)


const Liitem = border({
    color:'#000',
    comp:styled.li``
})

export {
    PayContainer,
   
    Liitem
} 