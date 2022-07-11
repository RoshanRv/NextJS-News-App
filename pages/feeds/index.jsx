import Link from 'next/link'
import React from 'react'
import Title from '../../components/Title'
import Head from 'next/head'

export const Card=({text,link})=>{
    return (
        <div className=' py-3  px-4  border-2 bg-lPri cursor-pointer text-white text-center hover:scale-x-105 border-dSec text-xl rounded-lg shadow-lg shadow-dSec hover:bg-dPri transition-all '>
            <Link href={link} ><h1>{text}</h1></Link>
        </div>
    )
}


const index = () => {
  return (
      <>
        <Head>
            <title>{`News | Categories`}</title>
                <meta
                name="description"
                content={`News Categories`}
                />
        </Head>
        <main className='flex flex-col h-[86vh] pb-8 px-4 justify-center items-center font-disp font-bold bg-lSec '>
            <Title>Categories</Title>
            {/*         categories */}
            <div className="grid lg:grid-cols-3 grid-cols-1 mt-6 lg:gap-8 gap-4">
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