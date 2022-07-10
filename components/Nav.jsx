import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className='flex justify-around items-center bg-lSec text-lPri border-b-4 border-dSec text-xl font-disp p-4'>
        <div className='flex gap-x-8 items-center'>
            <Link href={'/'}  ><a className='' >Home</a></Link>
            <Link href={'/feeds'}  ><a className='' >Feeds</a></Link>
            <Link href={'/search'}  ><a className='' >Search</a></Link>
        </div>
    </nav>
  )
}

export default Nav