import {connect} from 'react-redux'
import {show_data} from '../actionCreator'

const mapState = (state)=>{
    console.log(state.pay)
    return {
      test:state.pay.test
    }
}

const mapDispatch = (dispatch) => {
    return {
     show_data(data) {
        dispatch(show_data(data))
      }
    }
  }
  
export default connect(mapState, mapDispatch)