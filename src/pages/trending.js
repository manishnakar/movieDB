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
      
      const { data } = await axios.get(`${process.env.REACT_APP_MOVIE_DB_API_URL}/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_DB_API_TOKEN}&page=${page}`)     
      setContent(data.results)
      //console.log(data.results)
      setNumOfPages(data.total_pages)

  }

  useEffect(() => {
    fetchTrending();
  // eslint-disable-next-line
  }, [page])

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

        {numOfPages > 1 && (
          <CustomPagination setPage={setPage}  numOfPages={numOfPages} />
        )}

      
    </>
  )
}

export default Trending
