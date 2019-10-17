<<<<<<< HEAD
import { saga as categorySaga } from 'pages/mine/my/category/index.js'

function* saga() {
  yield categorySaga.LoadWaitPayList();

=======
import { loadDataSaga } from 'pages/home/MoldSort/'
// import { saga as categorySage } from 'pages/mine/my/category/'

function *saga(){
    yield loadDataSaga()
    // yield categorySage.getWaitPay()
  // yield homeSaga.loadDataSaga()
  // yield homeSaga.loadMoreDataSaga()
>>>>>>> master
}
export default saga