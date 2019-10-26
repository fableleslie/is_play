import styled from "styled-components"
import border from 'components/styles/border'
const MyActive = styled.div`
    width:100%;
    height: .85rem;
    display:flex;
    flex-direction: column;
    i{
        font-family:"iconfont";
    }
    .first{
        flex:1;
        display:flex;
        /* justify-content: space-between; */
        align-items:center;
        height:100%;
        width:100%;
        padding: 0 .15rem;
        .imgWrap{
            width:.6rem;
            height:.6rem;
            margin-right:.07rem;
            img{
                border-radius:.05rem;
                width:100%;
                height:100%;
            }
        }
        .msgWrap{
            flex:1;
            display: flex;
            flex-direction:column;
            height:.6rem;
            justify-content: space-between;
            h3{
                font-size:.15rem;
                color: #000;
            }
            h4{
                width: 2.4rem;
                white-space:nowrap;
                text-emphasis: emphasis;
                overflow: hidden;
                font-size: .13rem;
                color: #777777;
            }
        }
    }
    .public{
        width:100%;
        height:.5rem;
        text-align:center;
    }


`
const MyActiveContainer = border({
    width: "0 0 1px 0",
    comp: MyActive
})
export {
    MyActiveContainer
}