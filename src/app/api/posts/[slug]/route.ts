import { prisma } from "@/app/prisma";
import { NextResponse } from "next/server"
export const GET = async(req: Request)=>{
    const body =await req.json()  
      
    try {
        const single = await prisma.post.findUnique({
            where:{id:body.slug},
            include:{user:true}
        })
        return new NextResponse(JSON.stringify(single),{status:200})
    } catch (error) {
        
        return new NextResponse(JSON.stringify({message:"Somthing went wrong"}),{status:500})
    }
}

