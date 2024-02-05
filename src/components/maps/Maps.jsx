import Image from 'next/image'
import React from 'react'

export default function Maps() {
  return (
    <div className='maps container'>
      <div className='maps__inner'>
        <div className='maps__list'>
          <ul>
            <li>
              <p>no.1 도로롱 (밤/낮)</p>
            </li>
          </ul>
        </div>
        <div className='maps__map'>
          <Image src="/public/image/maps/T_WorldMap.webp" width={150} height={150} alt='도로롱' />
        </div>
      </div>
    </div>
  )
}
