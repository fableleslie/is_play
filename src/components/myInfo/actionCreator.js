//actionCreator里面是进行进行dispath的方法
import { DELETEDOMSAGA ,DELETEDOM } from "./actionTypes"

export const deleteDomSaga = (data,index)=>{
    return {
        type: DELETEDOMSAGA,
        data:{
            data,
            index
        }
    }
}

export const deleteDom = ()=>{
    return {
        type: DELETEDOM
    }
}

