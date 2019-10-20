import { loadDataSaga } from 'pages/home/MoldSort/'
import { loadDataSagaSearch } from 'pages/home/Search/'
// import { saga as categorySage } from 'pages/mine/my/category/'

function *saga(){
    yield loadDataSaga()
    yield loadDataSagaSearch()
    // yield categorySage.getWaitPay()
  // yield homeSaga.loadDataSaga()
  // yield homeSaga.loadMoreDataSaga()
}
export default saga