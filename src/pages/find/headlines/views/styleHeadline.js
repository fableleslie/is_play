import styled from 'styled-components'
const HeadStyle = styled.div`
    display : flex;
    flex-direction:column;
    >div{
        font-weight:bold;
        height:.40rem;
        border-bottom:1px solid #707070;
        font-size:.17rem;
        text-align:center;
        line-height:.40rem;
    }
    span{
        position: relative;
    }
    span::after{
        content:'';
        position: absolute;
        right: -17px;
        top: 7px;
        display:block;
        width:.05rem;
        height:.05rem;
        border-width:.05rem;
        border-style: solid;
        border-color:transparent transparent transparent #000;
    }

    ul{
        li{
            height:.92rem;
            padding: .16rem .14rem .16rem .15rem;
            border-bottom: 1px solid #000000;
            display:flex;
            img{
                width:.65rem;
                height: .6rem;
            }
            div{
                padding-top:.05rem;
                padding-left:.03rem;
                display:flex;
                flex-direction:column;
                justify-content:space-between;
                .headline_title{
                    font-size:.12rem;
                    color:#000000;
                }
                .headline_summary{
                    font-size:.11rem;
                    color:#777777;
                }
            }
        }
    }
`
export default HeadStyle