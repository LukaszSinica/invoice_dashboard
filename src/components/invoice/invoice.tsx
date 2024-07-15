import { Invoices } from '@/lib/invoices/fetchInvoice'
import React from 'react'
import InvoiceStatusSelect from '../ui/invoiceStatusSelect';

interface InvoiceProps extends Invoices {
  userRole: string | undefined;
}

export default function Invoice({...props}: InvoiceProps) {

  return (
    <tr className="bg-gray-300">
        <td className="p-4 border border-slate-600">{props.email}</td>
        <td className="p-4 border border-slate-600">{props.amount}</td>
        <td className="p-4 border border-slate-600">{props.date.toString()}</td>
        <td className="p-4 border border-slate-600">
          {props.userRole != "admin" 
          ? props.status 
          :  <InvoiceStatusSelect invoiceID={props.invoiceID} status={props.status}/>}
        </td>
    </tr>
  )
}
