import React, { Component } from 'react';
import {mapStateToProps,mapDispatchToProps} from '../view/connect'
import {connect} from 'react-redux'
import {SeachresContainer,LoadingContainer} from './style'
import Activity from 'pages/home/Sunday/component/Activity.jsx'
import http from 'utiles/http'
import loading from 'images/loading.gif'
import nothing from 'images/nothing.jpg'

class SearchRes extends Component {
    state = {
        list : ''
    }
    render() {
        if(this.state.list){
            return (
                <SeachresContainer>
                    <div className='searchRes'>
                        <i onClick={this.goBack}>&#xe646;</i>
                        <span>想你所想</span>
                        <i></i>
                    </div>
                    <div className='contentRes'>
                        {   this.state.list.length !== 0 ?
                            ((this.state.list).map((value,index)=>{
                                return  <Activity key={index}
                                            pic={value.pic}
                                            title={value.title}
                                            site={value.site}
                                            address={value.address}
                                            time={value.time}
                                            price={value.price}
                                            btn={value.btn}
                                        ></Activity>
                            }))
                            :  <div className='nothing'>
                                <img src={nothing} alt=""/>
                            </div>
                        }
                    </div>
                </SeachresContainer>
            )
        }
        else{
            return <LoadingContainer>
                <img src={loading} alt=""/>
            </LoadingContainer>
        }
    }
    async componentDidMount(){
        let keyword = this.props.location.search.split('=')[1]
        // 做搜索
        let res = await http.get(`http://localhost:3002/data?keyword=${keyword}`)
        this.setState({
            list : res
        })
    }
    goBack = ()=>{
        this.props.history.goBack()
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchRes);
