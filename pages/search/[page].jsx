import React,{useState,useEffect}from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Title from '../../components/Title'
import NewsBox from '../../components/NewsBox'
import Pagination from '../../components/Pagination'
import Head from 'next/head'

const search = () => {

  const {page} = useRouter().query
  const [articles,setArticles]=useState([])
  const [searchTerm,setSearchTerm]=useState('')
  const [totalResults,setTotalResults]=useState(0)

  const handleSearch = async()=>{
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchTerm}&pageSize=10&page=${''+page}&apiKey=${process.env.NEXT_NEWS_API_KEY}`)
    setArticles(response.data.articles)
    setTotalResults(response.data.totalResults)

  }

  useEffect(()=>{
    handleSearch()
  },[page])

  return (
    <>
    <Head>
        <title>News | Search</title>
            <meta
              name="description"
              content={`Search Any Sort Of News Here`}
            />

      </Head>
      <main  className='flex flex-col min-h-[95vh] justify-center items-center font-disp bg-lSec' >
        <Title>Search News</Title>

        <div className='mt-8 w-full lg:px-40 px-20' >
          {/*     search  */}
          <input type="search" value={searchTerm}  onChange={(e)=>setSearchTerm(e.target.value)} className='w-full my-4  bg-dSec rounded-lg p-3 text-white placeholder:text-gray-100 text-xl font-bold outline-0 border-4 border-white' placeholder='Search' />
          <button onClick={()=>handleSearch()} className='block w-max mx-auto px-6 py-2 my-6 rounded-lg bg-lPri text-white border-4 text-2xl ' >Search</button>
        </div>
        {/*    articles  */}
        {articles.length>0&&(<>
          <section  className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:gap-12 mt-10 p-4'>
            {articles.map((article,i)=><NewsBox key={i} data={article} />)}
          
          </section>

          <Pagination  totalResults={totalResults} page={page} size={10} url={`/search/`} />
        </>)}
      </main>
    </>
  )
}



export default search