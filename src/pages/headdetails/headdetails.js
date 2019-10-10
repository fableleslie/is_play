import React , {PureComponent} from 'react'
import {Route} from 'react-router-dom'
import HeadDetailContainer from './index/index'
class HeadDetails extends PureComponent{
    render(){
        console.log()
        return (
            <Route path='/headline/headderail' component={HeadDetailContainer}></Route>
        )
    }
}
export default HeadDetails