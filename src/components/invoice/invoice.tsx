import { Invoices } from '@/lib/invoices/fetchInvoice'
import React from 'react'

export default function Invoice({...props}: Invoices) {
  return (
    <div>
        <div>{props.email}</div>
        <div>{props.amount}</div>
        <div>{props.date.toString()}</div>
        <div>{props.status}</div>
    </div>
  )
}
