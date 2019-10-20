import styled from 'styled-components'

import { styledIconTwo , styledIconOne} from 'components/styles/icons.js'

import border from 'components/styles/border.js';

const ActivityEvaluationContainer = styled.div.attrs({
    id: "child"
})`
    padding: 0 .15rem;
        .header{
            height: .26rem;
            width: 100%;
            border-left: .08rem solid #FF6600;
            padding-left: .07rem;
            font-size: .18rem;
            line-height: .26rem;
            font-weight: bold;
        }
`

const UserListContainer = border({
    width: '0 0 1px 0',
    comp: styled.div`
        .evaluation-text{
            width: 100%;
            padding-left: .72rem;
            margin-top: .1rem;
            color: #777;
            font-size: .14rem;
        }
    `
})

const UserInfoContainer = styledIconTwo(
    styled.div`
        margin-top: .2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .user-head{
            font-family: "iconfont" !important;
            width: .42rem;
            height: .42rem;
            color: #707070;
            font-size: .42rem;
        }
        .create-time{
            width: .61rem;
            font-size: .14rem;
            color: #777;
        }
    `
)

const UserInfoWrap = styledIconOne(
    styled.div`
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: .2rem 0 0 .3rem;
        .user-name{
            font-size: .14rem;
        }
        .user-level{
            font-family: "iconfont" !important;
            color: #FF8E43;
        }
    `
)

const IconContainer = styledIconOne(
    styled.ul`
        padding: .21rem 0 .2rem .72rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li{
            i{
                font-family: 'iconfont' !important;
                font-size: .16rem;
                color: #777;
            }
            span{
                margin-left: .05rem;
            }
            &.support{
                width: .6rem;
            }
            &.reply{
                flex: 1;
                position: relative;
                i{
                    position: absolute;
                    top: .02rem;
                }
                span{
                    padding-left: .18rem;
                }
            }
            &.share{
                width: .16rem;
            }
        }
    `
)

const OrganizerContainer = styledIconTwo(
    styledIconOne(
        styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 2%;
        .organize-head{
            font-family: 'iconfont' !important;
            width: .57rem;
            height: .57rem;
            font-size: .57rem;
            color: #707070;
            position: relative;
            .authentication-sign{
                font-family: 'iconfont' !important;
                position: absolute;
                font-size: .15rem;
                width: .15rem;
                height: .15rem;
                left: 105%;
                top: 85%;
                color: #FF8E43;
            }
        }
        .organize-info{
            flex: 1;
            display: flex;
            flex-direction: column;
            padding-top: 8%;
            padding-left: 8%;
            .organize-name{
                font-size: .16rem;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .authentication{
                font-size: .12rem;
                width: .61rem;
                height: .23rem;
                background: #DDEBFF;
                color: #4392EF;
                text-align: center;
                line-height: .23rem;
                margin-top: .1rem;
            }
        }
        button{
            width: .53rem;
            height: .24rem;
            border: 1px solid #FF8E43;
            text-align: center;
            line-height: .24rem;
            background: #fff;
            margin-top: 8%;
            color: #FF8E43;
        }
    `
    )
)

export {
    ActivityEvaluationContainer,
    UserListContainer,
    UserInfoContainer,
    UserInfoWrap,
    IconContainer,
    OrganizerContainer
}