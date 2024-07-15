import { auth, prisma } from "@/auth";
import { NextResponse } from "next/server";

export const PUT = auth(async function PUT(req) {
    if (!req.auth)
        return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
    if(req.auth.user?.role != "admin") 
        return NextResponse.json({ message: "Not authorized" }, { status: 401 })

    const body = await req.json();
    const invoice = await prisma.invoice.update({
        where: {
            invoiceID: body.invoiceId
        },
        data: {
            status: body.status
        }
    })
    if(invoice != null) {
        return new Response(JSON.stringify(invoice))
    }   
    
    return new Response("Not Acceptable")
})