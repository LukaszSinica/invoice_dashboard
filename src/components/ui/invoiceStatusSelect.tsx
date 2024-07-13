"use client"
import { changeStatus } from '@/lib/invoices/changeInvoiceStatus';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useTransition } from 'react'

type InvoiceStatusSelectType = {
    invoiceID: string;
    status: string;
}

export default function InvoiceStatusSelect({invoiceID, status}: InvoiceStatusSelectType) {
    const [newStatus, setNewStatus] = React.useState(status)
    const router = useRouter();
    const [,startTransition] = useTransition()
    const handleChange = async (event: ChangeEvent<HTMLSelectElement>) => {
        const newStatus = event.target.value;
        setNewStatus(newStatus);
        changeStatus({invoiceId: invoiceID, status: newStatus})
        startTransition(() => {
          router.refresh()
        })
    }

  return (
    <select value={newStatus} onChange={handleChange} className='w-full h-full rounded-md h-8'>
        <option value="Pending">Pending</option>
        <option value="Paid">Paid</option>
    </select>
  )
}
