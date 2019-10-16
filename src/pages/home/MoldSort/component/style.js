import styled from 'styled-components'
import border from 'components/styles/border'

const ProjectContainer = styled.div`
    height : 1.2rem;
    padding : 0 .15rem;
    .item{
        height : 100%;
        padding : .1rem 0;
        display : flex;
        .leftImg{
            width : 1.5rem;
            height : 100%;
            margin-right : .1rem;
            position: relative;
            img{
                height : 100%;
                width : 100%;
            }
            .collect{
                position : absolute;
                top : .1rem;
                right : .14rem;
                height : .2rem;
                width : .2rem;
                img{
                    height : 100%;
                    width : 100%;
                }
            }
        }
        .rightName{
            flex : 1;
            overflow : hidden;
            .title{
                padding-right : .3rem;
                font-size : .14rem;
                color : #0D0D0D;
                font-weight : Bold;
                .circle{
                    height : .03rem;
                    width : .03rem;
                    background : #0D0D0D;
                    display : inline-block;
                    border-radius : 50%;
                    vertical-align : middle;
                    margin-right : .08rem;
                    margin-left : .04rem;
                }
            }
            .address{
                font-size : .11rem;
                color : #0D0D0D;
                margin-top : .08rem;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap; 
                width : 75%;
            }
            .time{
                margin-top : .06rem;
                display : flex;
                justify-content : space-between;
                span:nth-child(1){
                    font-size : .11rem;
                    color : #0D0D0D;
                }
                span:nth-child(2){
                    font-size : .15rem;
                    color : #FF6600;
                }   
            }
        }
    }
`
export const LaughContainer = styled.div`
    height : .6rem;
    width : .6rem;
    img{
        height : 100%;
        width : 100%;
        border-radius :50%;
    }
`
export const CryContainer = styled.div`
    height : .6rem;
    width : .6rem;
    img{
        height : 100%;
        width : 100%;
        border-radius :50%;
    }
`

export default border({
    width : '0 0 1px 0',
    comp : ProjectContainer
})
