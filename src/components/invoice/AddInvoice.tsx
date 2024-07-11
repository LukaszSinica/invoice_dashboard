"use client"
import { Users } from '@/lib/users/fetchUsers'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, FormEvent, useState, useTransition } from 'react'

type UsersProps = {
  users: Users[]
}

type FormDataProps = {
  user: string,
  amount: number,
}

export default function AddInvoice({...props}: UsersProps) {

  const [response, setResponse] = useState('');
  const [formData, setFormData] = useState<FormDataProps>({user: props.users[0].id, amount: 0});
  const router = useRouter()
  const [,startTransition] = useTransition()

  const userOptions = props.users.map((user) => 
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    
  )

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await fetch('http://localhost:3000/api/invoices', {
      method: 'POST',
      body: JSON.stringify(formData),
    }).then(() => {
      startTransition(() => {
        router.refresh()
      })
      router.push('/invoice');

    }).catch((error) => {
      setResponse(error);
    })

  }

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = event.currentTarget;
    
    setFormData(prevState => (
      {
        ...prevState, 
        [name]: name === 'amount' ? parseFloat(value) : value
      }
    ))
  }

  return (
    <form onSubmit={onSubmit} className='flex flex-col w-1/2 bg-gray-100 rounded-lg p-8 shadow-lg'>
        <h1 className="font-bold text-2xl pb-8">Create Invoice</h1>
        <div className="flex flex-col pb-4">
          <label htmlFor='user' className="pb-2">Chose user </label>
          <select name="user" id="user" value={formData.user} onChange={handleChange} className='rounded-md h-12 bg-white-200 pl-4 shadow-md'>
            {userOptions}
          </select>
        </div>
        <div className="flex flex-col pb-8">
          <label htmlFor='amount' className="pb-2">Amount </label>
          <input type="number" name="amount" id="amount" value={formData.amount}  onChange={handleChange} className='rounded-md h-12 bg-white-200 pl-4 shadow-md'/>
        </div>
        <button type="submit" className='rounded-md bg-blue-400 border-1 shadow-md h-12 text-white text-lg'>Submit</button>
        {response}
    </form>
  )
}
