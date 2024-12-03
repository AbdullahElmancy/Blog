import { prisma } from "@/app/prisma";
import { NextResponse } from "next/server"
export const GET = async()=>{
    try {
        const categories = await prisma.category.findMany()
        return new NextResponse(JSON.stringify(categories),{status:200})
    } catch (error) {
        console.log(error);
        
        return new NextResponse(JSON.stringify({message:"Somthing went wrong"}),{status:500})
    }
}
