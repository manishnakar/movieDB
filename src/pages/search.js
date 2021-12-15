import React , {useState, useEffect} from 'react'
import { TextField, Button, ThemeProvider, Tab, Tabs } from '@material-ui/core'
import  SearchIcon  from '@material-ui/icons/Search'
import { createTheme } from '@material-ui/core/styles'
import axios from 'axios'
import Pagination from '../components/Pagination/CustomPagination'
import Card from '../components/card/card'
const Search = () => {

  const [type, setType] = useState(0)
  const [page, setPage] = useState(1)
  const [searchText, setSearchText] = useState("")
  const [content, setContent] = useState([])
  const [numOfPages, setNumOfPages] = useState([])

  const fetchSearch = async () => {

      const {data} = await axios.get(`${process.env.REACT_APP_MOVIE_DB_API_URL}/3/search/${type? "tv" : "movie"}?api_key=${process.env.REACT_APP_MOVIE_DB_API_TOKEN}&language=en-US&query=${searchText}&page=${page}&include_default=false`)

      setContent(data.results)
      setNumOfPages(data.total_pages)
  }

  useEffect(() => {
    if(!searchText) return;  
    window.scroll(0,0)  
    fetchSearch()
  }, [type, page])


  const darkTheme = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: "#fff"
      }
    }
  })


  return (
    <>
    <ThemeProvider theme={darkTheme} >
      <div style={{display: 'flex', margin : "15px 0"}}> 
        <TextField 
        style={{ flex: 1}}
        className="searchBox" 
        variant="filled"
        label="Search"
        onChange={(e) => setSearchText(e.target.value)}
        />
        <Button variant="contained" style={{ marginRight: 10}} onClick={()=> fetchSearch()}>
        <SearchIcon />
        </Button>
      </div>

    <Tabs value={type} indicatorColor="primary" textColor="primary" 
    onChange={(event, newValue) => { setType(newValue); setPage(1)}}
    >
      <Tab style={{ width: "50%"}} label="Search Movies" />
      <Tab style={{ width: "50%"}} label="Search TV Series" />

    </Tabs>

      </ThemeProvider>

 <div className="trending">
      {
        
        content && (
          content.map((c) => {
            return <Card data={c} key={c.id} />
          })
        )
      }

      { searchText && !content && (type? <h2>No series Found</h2> : <h2>No movie Found</h2>)}

      </div>
      {
        numOfPages > 1 && (
          <Pagination setPage={setPage} numOfPages={numOfPages} />
        )
      }
    
      


    </>
  )
}

export default Search
     
