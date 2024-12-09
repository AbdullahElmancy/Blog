
export interface Icomment{
 data:[{
   id:string;
   desc:string;
   createdAt:string;
   user:{
      name:string;
      image:string
   }
 }] 
 mutate:any
 isLoading:boolean
}