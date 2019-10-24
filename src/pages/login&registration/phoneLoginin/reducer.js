const defaultState = {
    data:{}
}
export default (state=defaultState,action)=>{
    console.log('reducer')
    switch (action.type) {
        case 'loginData':
            return {
                data:action.data
            }
        default:
           return state
    }
}
