export const getVideoDuration=(duration)=>{

    let hours=(duration/3600).toFixed(0);
    let min=((duration%3600)/60).toFixed(0);
    let sec=duration%60;

    return `${hours>0? hours + ':':""}${min}:${sec} `
   
}