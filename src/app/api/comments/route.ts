import { prisma } from "@/app/prisma";
import { NextResponse } from "next/server"
export const GET = async(req:{url:string})=>{
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

export const Post = async(desc:string,postId:string,userEmail:string)=>{

    try {
        const comment = await prisma.comment.create({
            data:{
                desc,postId,userEmail
            }
        })
        return new NextResponse(JSON.stringify(comment),{status:200})
    } catch (error) {
        
        return new NextResponse(JSON.stringify({message:"Somthing went wrong"}),{status:500})
    }
}


