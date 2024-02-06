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
            <Link href='/items'>아이템</Link>
          </li>
          <li>
            <Link href='/maps'>맵</Link>
          </li>
          <li>
            <Link href='mailto:pal_world@outlook.kr'>건의하기</Link>
          </li>
        </ul>
      </nav>
      <div className="nav__mobile" id="navToggle" role="button" aria-label="메뉴 열기" aria-controls="primary-menu" aria-expanded={isShow ? "true" : "false"} onClick={toogleMenu} >
        <span></span>
      </div >
    </>
  )
}
