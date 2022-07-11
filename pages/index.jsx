import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import NewsBox from '../components/NewsBox'
import Title from '../components/Title'
import Link from 'next/link'

export default function Home({articles,totalResults}) {

  console.log({articles,totalResults})

  return (
    <>
    <Head>
      <title>Latest News Articles</title>
          <meta
            name="description"
            content={`Your one stop shop for the latest news articles`}
          />

          <meta property="og:image" content={articles[0].urlToImage} />
          <meta property="og:title" content={articles[0]?.title + ' and more!'} />
          <meta
            property="og:description"
            content={articles[0]?.description}
          />

          <meta property="twitter:image" content={articles[0].urlToImage} />
          <meta property="twitter:title" content={articles[0]?.title + ' and more!'} />
          <meta
            property="twitter:description"
            content={articles[0]?.description}
          />
    </Head>
      <main className='flex flex-col justify-center items-center font-disp bg-lSec' >
          <Title>Latest News</Title>

          <section  className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:gap-12 mt-10 p-4'>
            {articles.map((article,i)=><NewsBox key={i} data={article} />)}
            <div className="w-full h-full bg-lPri shadow-lg shadow-lPri rounded-lg hover:scale-105 transition-all flex justify-center items-center">
              <Link href={'/latest/1'} ><h1 className="text-5xl text-white font-bold cursor-pointer hover:underline underline-offset-2">Browse More</h1></Link>
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
