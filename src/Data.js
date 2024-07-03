export const API_KEY='AIzaSyDT18wK7eZPWWnghnSSkr788q_o3wSok3o';

export const value_converter=(value)=>{
    if (value>1000000){
        return Math.floor(value/1000000)+"M"
    }
    else if(value>1000){
        return Math.floor(value/1000)+"K"
    }
    else{
        return value;
    }
}

export const topbar_products=[
    {
        name:"ALL",
        id:0
    },
    {
        name:"JavaScript",
        id:23
    },
    {
        name:"Music",
        id:10
    },
    {
        name:"Trailers",
        id:0
    },
    {
        name:"Gaming",
        id:2
    },
    {
        name:"Action",
        id:3
    },
    {
        name:"Tamil",
        id:1
    },
    {
        name:"Cricket",
        id:0
    },{
        name:"Comedy",
        id:9
    },
    {
        name:"Anime",
        id:0
    },
    {
        name:"Watched",
        id:10
    },
    {
        name:"Kishan",
        id:10
    },
    
]


