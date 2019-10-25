const sagaLogin = (data)=>{
    return{
        type:'sagaLogin',
        data
    }
}
const loginData = (data)=>{
    return{
        type:'loginData',
        data
    }
}

export {
    sagaLogin,
    loginData
}