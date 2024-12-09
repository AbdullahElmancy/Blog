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

