import React, {useEffect, useState} from 'react'
import axios from '../axios'
import {Chip} from '@material-ui/core'

const Genres = ({
    type, 
    setPage, 
    setGenres, 
    genres, 
    setSelectedGenres, 
    selectedGenres}) => {

    const [isError, setisError] = useState(false)    
    const [errorMessage, setErrorMessage] = useState("")    


    const handleRemove = (genre) => {

        setSelectedGenres(selectedGenres.filter((g) => g.id !== genre.id)) 
        setGenres([...genres, genre])
        setPage(1)   
    } 
    
    const handleAdd = (genre) => {

        setSelectedGenres([...selectedGenres, genre] )
        setGenres(genres.filter((g) => g.id !== genre.id))
        setPage(1)

    }

    const fetchGenres = async() => {
        //const {data} = await axios.get()           
        //console.log(data.genres)
    
         await axios.get(`/3/genre/${type}/list?api_key=${process.env.REACT_APP_MOVIE_DB_API_TOKEN}&language=en-US`)
                .then((res) => {setGenres(res.data.genres); setPage(1) })
                .catch((err) => {setisError(true); setErrorMessage(err.message); })                

    }

    useEffect(() => {
        fetchGenres();

       return () => {
           setGenres({})
       }
       // eslint-disable-next-line         
    }, [])

    if (isError) return 'An error has occurred: ' + errorMessage

    return (        

        <div style={{ padding: "6px 0"}}>
              {selectedGenres && selectedGenres.map((genre) => {
                  return <Chip label={genre.name} key={genre.id} color='primary' size='small' style={{ margin: "2px"}} 
                   clickable onDelete={()=> handleRemove(genre)} 
                  />
              }

              )}  
              { genres &&  genres.map( (genre) => {
                  return <Chip onClick={() => handleAdd(genre)} 
                  size='small'
                  style={{ margin: "2px 2px"}}label={genre.name} key={genre.id} />
                  
              }) }
        </div >
    )
}



export default Genres

