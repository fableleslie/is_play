import axios from 'axios'

export default {
    get : (url)=>{
        return fetch(url).then(response => response.json()).then(result => {return result})
    },
    post : ({url,data}) => {
       return axios({
            url,
            method:'POST',
            data
        }).then((result)=>{
            return result
        })
    }
}