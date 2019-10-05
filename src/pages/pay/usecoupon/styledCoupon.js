import styled from 'styled-components'
import styledIcon  from 'components/styles/icons.js'

const Coupon = 
styledIcon(
    styled.div`
        width:100%;
        height:100%;
        position:fixed;
        display:flex;
        flex-direction:column;
        header{
            width:100%;
            height:.44rem;
            display:flex;
            justify-content:center;
            align-items:center;
            position:relative;
            background-color:#fff;
            i{
                width:.15rem;
                height:.15rem;
                position:absolute;
                top:.15rem;
                left:.12rem;
                font-family:'iconfont' !important;
                font-size:.18rem;
            }
            >div{
                font-size:.18rem;
            }
        }
        main{
            flex:1;
            padding:.1rem .15rem 0 ;
            >ul{
                width:100%;
                height:100%;
                li{
                    margin-top:.1rem;
                }
            }
        }
    `
)

export default Coupon