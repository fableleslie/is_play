import { saga as categorySaga } from 'pages/mine/my/category/index.js'

function* saga() {
  yield categorySaga.LoadWaitPayList();

}

export default saga