import { saga as categorySaga } from 'pages/mine/my/category/index.js'
import {saga as MyInfoSaga} from "components/myInfo/index.js"
import { loadDataSaga } from 'pages/home/MoldSort/'
function* saga() {
  
    yield loadDataSaga()
    yield categorySaga.LoadWaitPayList();
    yield MyInfoSaga.MyInfoDelete();
    // yield 
    // yield categorySage.getWaitPay()
  // yield homeSaga.loadDataSaga()
  // yield homeSaga.loadMoreDataSaga()
}
export default saga