import { Invoices } from '@/lib/invoices/fetchInvoice'
import React from 'react'
import InvoiceStatusSelect from '../ui/invoiceStatusSelect';



export default function Invoice({...props}: Invoices) {

  return (
    <div>
        <div>{props.email}</div>
        <div>{props.amount}</div>
        <div>{props.date.toString()}</div>
       <InvoiceStatusSelect invoiceID={props.invoiceID} status={props.status}/>
    </div>
  )
}
