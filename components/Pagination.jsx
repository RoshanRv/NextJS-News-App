import React from 'react'
import Link from 'next/link'

const Pagination = ({page,totalResults,size,url}) => {

    const maxPage = Math.ceil(totalResults/size)

  return (
    <div className='w-max my-8 p-2 flex gap-x-8 bg-lPri text-xl font-bold border-4 rounded-lg border-dSec items-center justify-center' >
        <Link href={url+(Number(page)-1)} ><button className={`text-white disabled:text-white/60 `}  disabled={page<2} >Back</button></Link>
        <h1 className={`text-white border-x-4 border-dSec px-6 text-2xl`}>{page}</h1>
        <Link href={url+(Number(page)+1)} ><button className={`text-white disabled:text-white/60  `} disabled={page>=maxPage} >Next</button></Link>
    </div>
  )
}

export default Pagination