import { prisma } from "@/app/prisma";
import { NextResponse } from "next/server"
export const GET = async(req: Request,{params}:{params:{slug:string}})=>{
    const {slug} = await params  
      
    try {
        const single = await prisma.post.findUnique({
            where:{id:slug},
            include:{user:true}
        })
        return new NextResponse(JSON.stringify(single),{status:200})
    } catch (error) {
        
        return new NextResponse(JSON.stringify({message:"Somthing went wrong"}),{status:500})
    }
}

