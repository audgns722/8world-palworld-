import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header id='header' className='container'>
      <div className='header__inner'>
        <h1 className='logo'>
          <Link href='/'>8Worl:D</Link>
        </h1>
        <nav className='nav'>
          <ul>
            <li>
              <Link href='/' className='active'>홈</Link>
            </li>
            <li>
              <Link href='/breeding'>교배(제작중)</Link>
            </li>
            <li>
              <Link href='mailto:'>건의하기</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
