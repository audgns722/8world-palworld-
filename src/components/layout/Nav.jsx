import Link from 'next/link'

export default function Nav() {
  
  return (
    <nav className='nav'>
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
  )
}
