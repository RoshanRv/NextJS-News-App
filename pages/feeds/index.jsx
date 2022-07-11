import Link from 'next/link'
import React from 'react'
import Title from '../../components/Title'

export const Card=({text,link})=>{
    return (
        <div className='px-6 py-3 border-2 bg-lPri cursor-pointer text-white text-center hover:scale-x-105 border-dSec text-xl rounded-lg shadow-lg shadow-dSec hover:bg-dPri transition-all '>
            <Link href={link} ><h1>{text}</h1></Link>
        </div>
    )
}


const index = () => {
  return (
      <>
        <main className='flex flex-col h-[92vh] justify-center items-center font-disp font-bold bg-lSec '>
            <Title>Categories</Title>
            {/*         categories */}
            <div className="grid lg:grid-cols-3 grid-cols-2 mt-6 gap-8">
               <Card text={'Technology'} link={'feeds/technology/1'}  />
               <Card text={'Business'} link={'feeds/business/1'}  />
               <Card text={'Health'} link={'feeds/health/1'}  />
               <Card text={'Entertainment'} link={'feeds/entertainment/1'}  />
               <Card text={'General'} link={'feeds/general/1'}  />
               <Card text={'Science'} link={'feeds/science/1'}  />
               <Card text={'Sports'} link={'feeds/sports/1'}  />
            </div>
            
        </main>
      </>
    
  )
}

export default index