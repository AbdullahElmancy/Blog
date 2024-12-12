import {v2 as cloudinary} from 'cloudinary'
import { auth } from "@/app/auth";
import { prisma } from "@/app/prisma";
import { NextResponse } from "next/server"
export const GET = async(req:{url:string})=>{
    const {searchParams} = new URL(req.url)
    const validatePage =  searchParams.get("page")
    const cat =  searchParams.get("cat")

    const page = validatePage !== null ? Number(validatePage):1
    const postpage = 4;
    try {
        const [posts,count] = await prisma.$transaction([
            prisma.post.findMany({
                take:postpage,
                skip:postpage * (page - 1),
                where:{...(cat && {catSlug:cat}),}
            }),
            prisma.post.count({
                where:{...(cat && {catSlug:cat}),}
            })    
        ])
        return new NextResponse(JSON.stringify({posts,count}),{status:200})
    } catch (error) {
        
        return new NextResponse(JSON.stringify({message:"Somthing went wrong"}),{status:500})
    }
}



export const POST = async(req: { json: () => any; body: any; })=>{
    
    const session = await auth()
    if(!session){
        
        return new NextResponse(JSON.stringify({message:"Not Allow To Add Post"}),{status:401})
        
    }


    try {        
        const body =await req.json()
        
        const post = await prisma.post.create({
            data:{
                ...body,userEmail:session.user?.email
            }
        })
        return new NextResponse(JSON.stringify(post),{status:200})
    } catch (error) {

        return new NextResponse(JSON.stringify({message:"Somthing went wrong"}),{status:500})
    }
}

