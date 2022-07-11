import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import axios from 'axios'
import Title from '../../components/Title'
import NewsBox from '../../components/NewsBox'
import Pagination from '../../components/Pagination'

const Page = ({articles,totalResults}) => {

  const {page} = useRouter().query

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
      <main  className='flex flex-col justify-center items-center font-disp bg-lSec' >
        <Title>Latest News</Title>

        <section  className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:gap-12 mt-10 p-4'>
          {articles.map((article,i)=><NewsBox key={i} data={article} />)}
         
        </section>

        <Pagination  totalResults={totalResults} page={page} size={10} url={`/latest/`} />

      </main>
    </>
  )
}

export const getServerSideProps=async(context)=>{

  const {page} = context.query

  const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&pageSize=10&page=${page}&apiKey=${process.env.NEXT_NEWS_API_KEY}`)

  return {
    props:{articles:response.data.articles,totalResults:response.data.totalResults}
  }

}

export default Page