import { loadDataSaga } from 'pages/home/MoldSort/'
import {saga as loginSaga} from 'pages/login&registration/phoneLoginin/index.js'
// import { saga as categorySage } from 'pages/mine/my/category/'

function *saga(){
    yield loadDataSaga()
    yield loginSaga.login()
    // yield categorySage.getWaitPay()
  // yield homeSaga.loadDataSaga()
  // yield homeSaga.loadMoreDataSaga()
}
export default saga