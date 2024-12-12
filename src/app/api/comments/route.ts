import { auth } from "@/app/auth";
import { prisma } from "@/app/prisma";
import { NextResponse } from "next/server"
export const GET = async(req:{url: string | URL})=>{
    const {searchParams} = new URL(req.url)
    const postId = searchParams.get("postId")
    try {
        const comments = await prisma.comment.findMany({
            where:{
                ...(postId && {postId}),
            },
            include:{user:true}
        })
        return new NextResponse(JSON.stringify(comments),{status:200})
    } catch (error) {
        
        return new NextResponse(JSON.stringify({message:"Somthing went wrong"}),{status:500})
    }
}

export const POST = async(req: { json: () => any; body: any; })=>{
    const session = await auth()
    if(!session){
        return new NextResponse(JSON.stringify({message:"Not Allow To Add Comment"}),{status:401})
        
    }
    try {
        
        const body =await req.json()
        
        const comment = await prisma.comment.create({
            data:{
                ...body,userEmail:session.user?.email
            }
        })
        return new NextResponse(JSON.stringify(comment),{status:200})
    } catch (error) {
        
        return new NextResponse(JSON.stringify({message:"Somthing went wrong"}),{status:500})
    }
}


