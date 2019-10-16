import React,{PureComponent} from 'react'

import EditUI from './editUI'

import connect from './connect'


@connect
class EditContainer extends PureComponent{

    state = {
        name:'',
        phonenum:'',
        city:'',
        address:''
    }

    render(){
        return(
            <EditUI
            comeBack={this.comeBack}
            preserve={this.preserve}
            state={this.state}
            >

            </EditUI>
        )
    }
    comeBack = ()=>{
        this.props.history.goBack()
    }
    preserve = () => {
        // console.log(this.state)
    }

}

export default EditContainer