"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [isShow, setIsShow] = useState(false)
  const toogleMenu = () => {
    setIsShow((prevShow) => !prevShow);
}

  return (
    <>
      <nav className={`nav ${isShow ? "show" : ""}`} role="navigation" aria-label="메인 메뉴">
        <ul>
          <li>
            <Link href='/'>홈</Link>
          </li>
          <li>
            <Link href='/collection'>도감</Link>
          </li>
          <li>
            <Link href='/breeding'>교배</Link>
          </li>
          <li>
            <Link href=''>맵(제작중)</Link>
          </li>
          <li>
            <Link href='mailto:yunyoungsik91@gmail.com'>건의하기</Link>
          </li>
        </ul>
      </nav>
      <div className="nav__mobile" id="navToggle" role="button" aria-controls="primary-menu" aria-expanded={isShow ? "true" : "false"} onClick={toogleMenu} >
        <span></span>
      </div >
    </>
  )
}
