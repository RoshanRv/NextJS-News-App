import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'

export default function Home({articles,totalResults}) {

  console.log({articles,totalResults})

  return (
    <>
    
      <main className='flex flex-col justify-center items-center font-disp' >
          <h1 className="text-6xl my-3 text-dSec font-bold underline underline-offset-4 decoration-dPri ">Latest News</h1>
      </main>

    </>
   
  )
}

export const getServerSideProps=async()=>{

  const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&pageSize=5&apiKey=${process.env.NEXT_NEWS_API_KEY}`)


  return {
    props:{articles:response.data.articles,totalResults:response.data.totalResults}
  }

}
