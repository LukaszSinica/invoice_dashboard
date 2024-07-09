"use client"
import { changeStatus } from '@/lib/invoices/changeInvoiceStatus';
import React, { ChangeEvent } from 'react'

type InvoiceStatusSelectType = {
    invoiceID: string;
    status: string;
}

export default function InvoiceStatusSelect({invoiceID, status}: InvoiceStatusSelectType) {
    const [newStatus, setNewStatus] = React.useState(status)

    const handleChange = async (event: ChangeEvent<HTMLSelectElement>) => {
        const newStatus = event.target.value;
        setNewStatus(newStatus);
        changeStatus({invoiceId: invoiceID, status: newStatus})
    }

  return (
    <select value={newStatus} onChange={handleChange}>
        <option value="Pending">Pending</option>
        <option value="Paid">Paid</option>
    </select>
  )
}
