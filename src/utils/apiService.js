import axios from "axios";

const instance=axios.create({
    baseURL:'https://api.pexels.com/videos',
    headers:{
        Authorization:'QbYCkln3wZ4XClcnt2XBCFfh7pubOKJdufGyK6n8JgYhLaaXiMahNbil',
        "Content-Type":"application/json"
    }
})

export const apiService=async (method,url,body)=>{
    switch(method){
        case 'GET':
            let res=await instance.get(url);
            return res.data;
    }
}



export const popularVideosAPI=async ()=>{
    let res=await instance.get('/popular');
    return res;
}

export const getParticularVideo=async (id)=>{
    let res=await instance.get(`/videos/${id}`);
    return res;
}

export const searchVideos=async (query)=>{
    let res=await instance.get(`/search?query=${query}`);
    return res;
}