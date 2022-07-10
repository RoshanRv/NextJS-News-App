import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Title from '../../../components/Title'
import NewsBox from '../../../components/NewsBox'

const page = ({articles,totalResults}) => {

  const {category} = useRouter().query

  return (
    <>
      <main  className='flex flex-col justify-center items-center font-disp bg-lSec' >
        <Title>{category} News</Title>

        <section  className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:gap-12 mt-10 p-4'>
          {articles.map((article,i)=><NewsBox key={i} data={article} />)}
          <div className="w-full h-full bg-lPri shadow-lg shadow-lPri rounded-lg hover:scale-105 transition-all flex justify-center items-center">
            <h1 className="text-5xl text-white">Browse More</h1>
          </div>
        </section>
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

export default page