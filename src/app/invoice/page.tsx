import Invoice from '@/components/invoice/invoice';
import { fetchInvoices, Invoices } from '@/lib/invoices/fetchInvoice';
import Link from 'next/link';
import React from 'react'

export const revalidate = 0

export default async function InvoicePage() {
  const invoices = await fetchInvoices()

  return (
    <div className="flex min-h-screen flex-col items-start p-24 w-5/6">
        <Link href="/invoice/add" 
              className='flex h-12 w-32 bg-gray-300 border-black rounded-lg border mb-4 justify-center items-center font-medium shadow-sm
              hover:bg-gray-200
              '
              >New Invoice
        </Link>
        <table className="table-auto border-collapse border border-slate-500 ">
          <thead>
            <tr className='bg-white'>
              <th className='p-4 text-left border border-slate-600'>Email</th>
              <th className='p-4 text-left border border-slate-600'>Amount</th>
              <th className='p-4 text-left border border-slate-600'>Date</th>
              <th className='p-4 text-left border border-slate-600'>Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => 
            
                  <Invoice 
                    key={invoice.invoiceID}
                    invoiceID={invoice.invoiceID} 
                    email={invoice.email} 
                    amount={invoice.amount} 
                    date={invoice.date} 
                    status={invoice.status} />
            )}
          </tbody>
        </table>
    </div>
  )
}

