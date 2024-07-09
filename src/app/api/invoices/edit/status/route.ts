import { prisma } from "@/auth";

export async function PATCH(req: Request) {
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
}