import { auth } from '@/auth'
import { SignOut } from '@/components/signOut'
import NavbarLinkItem from '@/components/ui/navbarLinkItem'
import Link from 'next/link'
import React from 'react'

export default async function Navbar() {
    const session = await auth()

    return (
        <nav className='w-1/6 max-h-full bg-white shadow-lg'>

            <Link href="/"><h1 className="font-bold text-2xl p-4 mb-4">Invoice Dashboard</h1></Link>
            {!session?.user ? 
                <NavbarLinkItem name={"Login"} link={'/login'}/>
                : 
                <>
                    <h1 className='pl-4'>Hi {session.user.name}</h1>
                    <NavbarLinkItem name={"Invoice"} link={'/invoice'}/>
                    <SignOut/>

                </>
            }
        </nav>
    )
}
