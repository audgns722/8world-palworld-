import Link from 'next/link'

export default function Nav() {

  return (
    <>
      <nav className='nav' role="navigation" aria-label="메인 메뉴">
        <ul>
          <li>
            <Link href='/'>홈</Link>
          </li>
          <li>
            <Link href='/collection'>도감</Link>
          </li>
          <li>
            <Link href='/'>교배(제작중)</Link>
          </li>
          <li>
            <Link href='mailto:kickoffsecond@gmail.com'>건의하기</Link>
          </li>
        </ul>
      </nav>
      <div class="nav__mobile" id="navToggle" role="button" aria-controls="primary-menu" >
        <span></span>
      </div >
    </>
  )
}
