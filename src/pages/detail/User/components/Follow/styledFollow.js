import styled from 'styled-components'

const FollowContainer = styled.div`
    padding: .1rem .15rem;
    background: #F7F7F7;
    ul{
        li{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            border-radius: .05rem;
            background: #fff;
            .user-head{
                width: .94rem;
                height: .53rem;
                font-size: .53rem;
                position: relative;
                margin-top: -.3rem;
                i{
                    font-family: 'iconfont' !important;
                    width: .94rem;
                    height: .52rem;
                    font-size: .52rem;
                    &.Authentication{
                        position: absolute;
                        width: .14rem;
                        height: .14rem;
                        font-size: .14rem;
                        top: 100%;
                        left: 55%;
                        color: #FF6600;
                    }
                }
            }
            .user-info{
                margin-top: .17rem;
                margin-bottom: .12rem;
                display: flex;
                flex-direction: column;
                padding-right: .14rem;
                .user-name{
                    font-size: .15rem;
                    line-height: .2rem;
                    font-weight: bold;
                }
                .introduce{
                    font-size: .13rem;
                    line-height: .17.5rem;
                    color: #777;
                    margin-top: .06rem;
                }
            }
        }
    }
`

export {
    FollowContainer
}