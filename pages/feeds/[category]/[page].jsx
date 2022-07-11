import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import axios from 'axios'
import Title from '../../../components/Title'
import NewsBox from '../../../components/NewsBox'
import Pagination from '../../../components/Pagination'

const Page = ({articles,totalResults}) => {

  const {category,page} = useRouter().query

  return (
    <>
      <Head>
        <title>{`News | ${category}`}</title>
            <meta
              name="description"
              content={`Latest ${category} News Articles`}
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
        <Title>{category} News</Title>

        <section  className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:gap-12 mt-10 p-4'>
          {articles.map((article,i)=><NewsBox key={i} data={article} />)}
          {/* <div className="w-full h-full bg-lPri shadow-lg shadow-lPri rounded-lg hover:scale-105 transition-all flex justify-center items-center">
            <h1 className="text-5xl text-white">Browse More</h1>
          </div> */}
        </section>
        <Pagination  totalResults={totalResults} page={page} size={10} url={`/feeds/${category}/`} />
      </main>
    </>
  )
}

export const getServerSideProps=async(context)=>{

  const {page, category} = context.query

  const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=10&page=${page}&apiKey=${process.env.NEXT_NEWS_API_KEY}`)

  return {
    props:{articles:response.data.articles,totalResults:response.data.totalResults}
  }

}

export default Page