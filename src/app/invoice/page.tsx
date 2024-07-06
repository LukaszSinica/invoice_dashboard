import AddInvoice from '@/components/invoice/AddInvoice'
import { fetchUsers, Users } from '@/lib/users/fetchUsers'
import React from 'react'

type UsersProps = {
  users: Users[]
}

export default async function InvoicePage() {
  const users = await fetchUsers();
  console.log(users);
  return (
    <div className="flex min-h-screen flex-col items-start justify-between p-24 w-5/6">
        <AddInvoice/>
    </div>
  )
}

