import { loadDataSaga } from 'pages/home/MoldSort/'
// import { saga as categorySage } from 'pages/mine/my/category/'

function *saga(){
    yield loadDataSaga()
    // yield categorySage.getWaitPay()
  // yield homeSaga.loadDataSaga()
  // yield homeSaga.loadMoreDataSaga()
}
export default saga