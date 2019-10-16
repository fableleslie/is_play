import {connect} from 'react-redux'
import {change_order} from '../actionCreator'

const mapState = (state)=>{
    //console.log(state.pay)
    return {
      pay_order:state.pay.pay_order
    }
}

const mapDispatch = (dispatch) => {
    return {
     show_data(data) {
        dispatch(change_order(data))
      }
    }
  }
  
export default connect(mapState, mapDispatch)