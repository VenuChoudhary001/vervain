import { getPopularVideos } from "../utils/apiService";
import { ACTIONS } from "./actions";







export const reducer=(state,action)=>{
    switch(action.type){
        case ACTIONS.GET_POPULAR_VIDEOS:
            console.log(action.payload)
             return {
                ...state,
                popularVideos:[
                    ...action.payload.data.videos
                ]
             }
        case ACTIONS.SEARCH_VIDEOS:
            return {
                ...state,
                search:{...action.payload}
            }
    }

}