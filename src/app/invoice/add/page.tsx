import AddInvoice from '@/components/invoice/AddInvoice';
import { fetchUsers } from '@/lib/users/fetchUsers'
import React from 'react'

export default async function InvoicePage() {
  const users = await fetchUsers();
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 w-5/6">
        <AddInvoice users={users}/>
    </div>
  )
}

