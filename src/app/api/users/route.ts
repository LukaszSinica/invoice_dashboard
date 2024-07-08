import { prisma } from "@/auth";
import { NextResponse } from "next/server";

export async function GET() {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            image: true,
        }
    });
    return NextResponse.json(users, {status: 200});
}