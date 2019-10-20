import styled from 'styled-components'

import {
    styledIconOne,
    styledIconTwo
} from 'components/styles/icons.js'

const UserContainer = styled.div`
    width: 100%;
    height: 100%;
`

const UserHead = styledIconOne(
    styled.div`
        height: .5rem;
        position: fixed;
        z-index: 1000;
        line-height: .5rem;
        i{
            font-family: 'iconfont' !important;
            width: .08rem;
            height: .15rem;
            font-size: .15rem;
            margin-left: .15rem;
            font-weight: bold;
            background: transparent;
        }
    `
)

const UserInfo = styledIconTwo(
    styled.div`
        .user-head-name{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: #FFE60D;
            .head{
                font-family: 'iconfont' !important;
                width: 1.3rem;
                height: .73rem;
                font-size: .73rem;
                color: #777;
                margin-top: .11rem;
            }
            .name{
                line-height: .18rem;
                font-size: .15rem;
                margin-bottom: .13rem;
                margin-top: .2rem;
                font-weight: 400;
            }
        }
        .collection-follow-evaluation{
            width: 100%;
            height: .6rem;
            background: #F0F0F0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            div{
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: #A3A3A3;
                b{
                    font-size: .18rem;
                }
                span{
                    font-size: .13rem;
                }
                &.active{
                    color: #000;
                }
            }
        }
    `
)

export {
    UserContainer,
    UserHead,
    UserInfo
}