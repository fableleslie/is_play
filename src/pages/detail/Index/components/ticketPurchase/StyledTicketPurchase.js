import styled from 'styled-components'

import { styledIconTwo } from 'components/styles/icons.js'

const TicketPurchaseContainer = styled.div.attrs({
    id: 'child'
})`
    .header{
        height: .26rem;
        width: 100%;
        border-left: .08rem solid #FF6600;
        padding-left: .07rem;
        font-size: .18rem;
        line-height: .26rem;
        font-weight: bold;
    }
    .content-wrap{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 .15rem;
        .text-wrap{
            margin-top: .24rem;
            padding: 0 .15rem;
            color: #777;
            font-size: .13rem;
            line-height: .25rem;
            li{
                list-style: square;
            }
        }
        .am-button{
            width: 1.61rem;
            height: .34rem;
            border: 1px solid #FF8E43;
            background: #fff;
            color: #FF8E43;
            font-size: .14rem;
            line-height: .32rem;
            margin: 0 auto;
            border-radius: .05rem;
        }
    }
`

const IconWrap = styledIconTwo(
    styled.ul`
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: .14rem;
        li{
            display: flex;
            flex-direction: column;
            justify-content: center;
            i{
                font-family: "iconfont" !important;
                width: .4rem;
                height: .4rem;
                font-size: .4rem;
                
            }
            span{
                margin-top: .3rem;
                font-size: .13rem;
                color: #0D0D0D;
            }
            &.parking{
                i{
                    margin-left: .08rem;
                }
            }
        }
    `
)

export {
    TicketPurchaseContainer,
    IconWrap
}