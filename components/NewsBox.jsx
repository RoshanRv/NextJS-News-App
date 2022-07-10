import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const NewsBox = ({data}) => {
  return (
    <div className=' border-4 rounded-lg overflow-hidden hover:scale-105 transition-all border-lPri flex flex-col shadow-lg shadow-lPri'>
        <div className='' >
            {!!data?.urlToImage?(<img src={data?.urlToImage} className=' object-cover w-full h-80 transition-all' />):(
                <div className="h-80 w-full bg-dSec flex items-center justify-center">
                    <h1 className='text-6xl text-white font-bold -rotate-45' >No Image</h1>
                </div>
            )}  
        </div>
        <div className='bg-lPri flex flex-col h-full p-4' >
            <a target={'_blank'} rel="noopener noreferrer" href={data.url}><h1 className='my-4  text-white text-2xl font-bold hover:underline underline-offset-2 decoration-lSec' >{data?.title}</h1></a>
            <p className='my-1 text-lSec text-md' >{data?.description}</p>
        </div>
    </div>
  )
}

export default NewsBox