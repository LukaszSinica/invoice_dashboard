import { auth } from '@/auth';
import AddInvoice from '@/components/invoice/AddInvoice';
import { fetchUsers } from '@/lib/users/fetchUsers'
import React from 'react'

export default async function InvoicePage() {
  const session = await auth()
  const users = await fetchUsers();
  if(!session || session.user?.role !== "admin" ) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-between p-24 w-5/6">
        Not authenticated
      </div>
    )
  }
  console.log(session?.user?.role);
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 w-5/6">
        <AddInvoice users={users}/>
    </div>
  )
}

