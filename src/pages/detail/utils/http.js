import axios from 'axios'

export default {
    get : (url)=>{
        return fetch(url).then(response => response.json()).then(result => {return result})
    },
    post : (url,params) => {
       return axios({
            url,
            method:'POST',
            params
        }).then((result)=>{
            return result
        })
    }
}