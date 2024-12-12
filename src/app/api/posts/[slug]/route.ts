import { prisma } from "@/app/prisma";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
export const GET = async (req: Request) => {
  const query =await req.url?.split("/").at(-1);

  try {
    const single = await prisma.post.findUnique({
      where: { id: query },
      include: { user: true },
    });
    return new NextResponse(JSON.stringify(single), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Somthing went wrong" }),
      { status: 500 }
    );
  }
};
