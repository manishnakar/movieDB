import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from '../components/card/card'
import CustomPagination from '../components/Pagination/CustomPagination'
import './trending.css'

const Trending = () => {

  const [content, setContent] = useState([])
  const [page, setPage] = useState(1)
  const [numOfPages, setNumOfPages] = useState()

  const fetchTrending = async() => {  

      const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=c3e0a6e96409f270c2e75c0c411273da&page=${page}`)      
      setContent(data.results)
      setNumOfPages(data.total_pages)

  }

  useEffect(() => {fetchTrending();}, [page])

  return (
    <>
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {
          content && content.map((c) => {            
            return <Card data={c} key={c.id} />
          })
        }
      </div>
      <CustomPagination setPage={setPage}  numOfPages={numOfPages} />
    </>
  )
}

export default Trending
