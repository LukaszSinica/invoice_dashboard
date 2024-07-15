import { auth, prisma } from "@/auth";
import { NextResponse } from "next/server";


export const POST = auth(async function POST(req) {
    if (!req.auth)
        return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
    if(req.auth.user?.role != "admin") 
        return NextResponse.json({ message: "Not authorized" }, { status: 401 })

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
})

export async function GET() {
    const invoices = await prisma.invoice.findMany()
    return NextResponse.json(invoices, {status: 200});
}