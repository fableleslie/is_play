import { connect } from 'react-redux'

import { changeMeta } from '../actionCreator'

const mapState = (state) => {
  return {
    meta: state.details.meta
  }
}

const mapDispatch = (dispatch) => {
 
  return {
    changeMeta: (meta) => {
      dispatch(changeMeta(meta))
    }
  }
}

export default connect(mapState, mapDispatch)