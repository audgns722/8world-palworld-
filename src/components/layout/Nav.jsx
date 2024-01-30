"use client"

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function Nav() {
  const router = useRouter();
  console.log(router)
  
  return (
    <nav className='nav'>
      <ul>
        <li>
          <Link href='/' className={router.pathname === '/' ? 'active' : ''}>홈</Link>
        </li>
        <li>
          <Link href='/collection' className={router.pathname === '/collection' ? 'active' : ''}>도감</Link>
        </li>
        <li>
          <Link href='/'>교배(제작중)</Link>
        </li>
        <li>
          <Link href='mailto:'>건의하기</Link>
        </li>
      </ul>
    </nav>
  )
}
