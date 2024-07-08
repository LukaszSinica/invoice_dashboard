import Invoice from '@/components/invoice/invoice';
import { fetchInvoices, Invoices } from '@/lib/invoices/fetchInvoice';
import Link from 'next/link';
import React from 'react'

export default async function InvoicePage() {
  const invoices = await fetchInvoices()


  return (
    <div className="flex min-h-screen flex-col items-start justify-between p-24 w-5/6">
        <Link href="/invoice/add">New Invoice</Link>
        {invoices.map((invoice) => 
          <Invoice 
            key={invoice.invoiceID}
            invoiceID={invoice.invoiceID} 
            email={invoice.email} 
            amount={invoice.amount} 
            date={invoice.date} 
            status={invoice.status} />
        )}
    </div>
  )
}

