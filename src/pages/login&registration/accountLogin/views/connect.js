import {connect} from 'react-redux'
const mapState = (state)=>{
    return{
        state
    }
}

const mapDispatch = (dispatch)=>{
    return{

    }
}
export default connect(mapState, mapDispatch)
