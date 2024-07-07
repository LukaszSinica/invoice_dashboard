"use client"
import { Users } from '@/lib/users/fetchUsers'
import React, { ChangeEvent, FormEvent, useState } from 'react'

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

  const userOptions = props.users.map((user) => 
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    
  )

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch('http://localhost:3000/api/invoices', {
      method: 'POST',
      body: JSON.stringify(formData),
    })

    const data = await response.json();

    setResponse(data);
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
    <form onSubmit={onSubmit} >
        <select name="user" id="user" value={formData.user} onChange={handleChange}>
          {userOptions}
        </select>
        <div>
          Amount:
          <input type="number" name="amount" id="amount" value={formData.amount}  onChange={handleChange}/>
        </div>
        <button type="submit">Submit</button>
        {response}
    </form>
  )
}
