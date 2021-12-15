import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from '../components/card/card'
import Pagination from '../components/Pagination/CustomPagination'
import Genres from '../components/Genres'
import './trending.css'
import useGenres from '../hooks/useGenres'

const Series = () => {

    const [page, setPage] = useState(1)
    const [numOfPages, setNumOfPages] = useState(0)
    const [content, setContent] = useState([])
    const [selectedGenres, setSelectedGenres] = useState([])
    const [genres, setGenres] = useState([])
    const genreforURL = useGenres(selectedGenres);
    
    const fetchMovies = async() => {  
    const { data } = await axios.get(`${process.env.REACT_APP_MOVIE_DB_API_URL}/3/discover/tv?api_key=${process.env.REACT_APP_MOVIE_DB_API_TOKEN}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)
    
    setContent(data.results)
    //console.log(data.results)
    setNumOfPages(data.total_pages)

  }

  useEffect(() => {
    fetchMovies();
     // eslint-disable-next-line 
  }, [page, genreforURL])


  return (
    <>
      <span className="pageTitle">Movies</span>
      <Genres 
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="trending">
      {
        
        content && (
          content.map((c) => {
            return <Card data={c} key={c.id} />
          })
        )
      }

      </div>
      {
        numOfPages>1 && (
          <Pagination setPage={setPage} numOfPages={numOfPages} />
        )
      }
      
    </>
  )
}

export default Series
