"use client"
import clsx from 'clsx';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
interface NavbarLinkItemProps {
    name: string,
    link: string,
}

export default function NavbarLinkItem({...props}: NavbarLinkItemProps) {
    const pathName = usePathname();

    return (
        <Link href={props.link} className={clsx(
            'w-full h-16 hover:bg-slate-200 rounded-xl flex items-center p-4 font-medium text-lg',
            {
                "bg-slate-200": pathName === props.link
            },
            )}>
            {props.name}
        </Link>
    )
}
