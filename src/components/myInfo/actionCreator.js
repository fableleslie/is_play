//actionCreator里面是进行进行dispath的方法
import { DELETEDOMSAGA ,DELETEDOM } from "./actionTypes"

export const deleteDomSaga = (data,index,activeId)=>{
    return {
        type: DELETEDOMSAGA,
        data:{
            data,
            index,
            activeId
        }
    }
}

export const deleteDom = (data)=>{
    return {
        type: DELETEDOM,
        data
    }
}

