import React,{PureComponent} from 'react'
import {MyTicketsContainer} from "./StyledMyTickets"

class MyTickets extends PureComponent{
render(){
  return(
    <MyTicketsContainer>
        {
            (this.props.list&&JSON.stringify(this.props.list[0].data)!=="{}") 
            ?(<div className="tkWrap">
            <h1>￥<span>{this.props.item.discountsType}</span></h1>
            <h3>新用户使用券</h3>
            {/* 这个时间也是后台返回的数据 */}
            <h5>使用期限:<span>2019年9月20日至2019年10月10日</span>有效</h5>
            </div>)
            :(
                <div className="duihuan">
                    <input/>
                    <div>
                        <span>兑换</span>
                    </div>
                </div>
            )
        }
       

    </MyTicketsContainer>
  )
 }
 componentDidMount(){
    console.log(this.props.item)
 }
}
export default MyTickets