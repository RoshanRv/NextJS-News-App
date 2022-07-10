import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import NewsBox from '../components/NewsBox'

export default function Home({articles,totalResults}) {

  console.log({articles,totalResults})

  return (
    <>
    
      <main className='flex flex-col justify-center items-center font-disp bg-lSec' >
          <h1 className="text-5xl my-6 text-lPri font-bold underline underline-offset-4 decoration-dSec ">Latest News</h1>

          <section  className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:gap-12 mt-10 p-4'>
            {articles.map((article,i)=><NewsBox key={i} data={article} />)}
            <div className="w-full h-full bg-lPri rounded-lg hover:scale-105 transition-all flex justify-center items-center">
              <h1 className="text-5xl text-white">Browse More</h1>
            </div>
          </section>

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
