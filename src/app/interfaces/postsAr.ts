export interface Iposts{
    posts:{id:string;img:string;slug:string;createdAt:string;title:string;desc:string}[];
    count:number
}

export interface ISinglePost{
    id:string;
    img:string;
    slug:string;
    createdAt:string;
    title:string;
    desc:string;
    user:{
        name:string;
        image:string
    }
}