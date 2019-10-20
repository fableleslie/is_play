import React, { Component } from 'react';
import MoldSortUI from './MoldSortUI'
import {connect} from 'react-redux'
import {mapStateToProps,mapDispatchToProps} from './connect'
 
class MoldSort extends Component {
    render() {
        return (
            <MoldSortUI typePick={this.typePick} List={this.props.Activity}></MoldSortUI>
        )
    }
    typePick = (data)=>{
        this.props.history.push(`/index/moldSort/type${data}?order=-1`) //order为排序方式
        // 请求前，先清空store中的数据
        this.props.loadTypeData(data) //点击的时候就做一次ajax请求 (应该是post请求，两个参数)
    }
    componentDidMount(){
        // console.log(1)
        // 金刚区跳转进来可以做一次ajax请求
        // 根据路由做的ajax请求
        let data = this.props.location.pathname.split('type')[1]
        // 还需要order的数据
        this.props.loadTypeData(data)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MoldSort);
