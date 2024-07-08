import { prisma } from "@/auth";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    const body = await req.json();
    const user = await prisma.user.findUnique({
        where: {
            id: body.user
        }
    })
    if(user != null) {
        const newInvoice = await prisma.invoice.create({
            data: {
                email: user.email,
                amount: body.amount,
                status: "Pending",
                userId: body.user
            }
        })
        return new Response(JSON.stringify(newInvoice))
    }   
    return new Response("Not Acceptable")
}

export async function GET() {
    const invoices = await prisma.invoice.findMany()
    return NextResponse.json(invoices, {status: 200});
}