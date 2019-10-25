import { saga as categorySaga } from 'pages/mine/my/category/index.js'
import {saga as MyInfoSaga} from "components/myInfo/index.js"
import { loadDataSaga } from 'pages/home/MoldSort/'
import { loadDataSagaSearch } from 'pages/home/Search/'
function* saga() {
    
    yield loadDataSaga()
    yield loadDataSagaSearch()
    yield categorySaga.LoadWaitPayList();
    yield categorySaga.LoadAllPayList();
    yield categorySaga.LoadWkTicketList();
    yield categorySaga.LoadCollectList();
    yield categorySaga.LoadActionList();
    yield MyInfoSaga.MyInfoDelete();
}
export default saga