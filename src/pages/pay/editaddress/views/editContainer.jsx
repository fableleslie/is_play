import React,{PureComponent} from 'react'

import EditUI from './editUI'

class EditContainer extends PureComponent{
    render(){
        return(
            <EditUI
            comeBack={this.comeBack}
            >

            </EditUI>
        )
    }
    comeBack = ()=>{
        this.props.history.goBack()
    }
}

export default EditContainer