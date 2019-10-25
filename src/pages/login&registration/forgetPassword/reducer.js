const defaultState = {
    userTel:null,
}
export default (state=defaultState,action)=>{
    switch(action.type){
        case 'tranPassword':
            return{
                userTel:action.data
            }
        default:
            return state
    }
}