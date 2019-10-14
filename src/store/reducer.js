import { combineReducers } from 'redux'
import { reducer as search } from 'pages/home/Search/index'
import { reducer as  moldSort} from 'pages/home/MoldSort/index'

export default combineReducers({
    search,
    moldSort
})