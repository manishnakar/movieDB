import React from 'react'
import {img_300, unavailable} from '../../config/config'
import './card.css'
import { Badge }  from '@material-ui/core'


function card(props) {
    
    const { id, poster_path, title,name, release_date, media_type, vote_average} = props.data

    const title1 = title || name

    return (
        <div className="media">
            <Badge badgeContent={vote_average} color={vote_average>6?'primary': 'secondary'} />
            <img className="poster" src={poster_path? `${img_300}/${poster_path}` : unavailable} alt={title1} />
            <b className="title">{title1}</b>
            <span className="subTitle">{media_type==="tv" ? "TV series" : "Movie" }
            <span className="subTitle">{release_date}</span>
            </span>
            
        </div>
    )
}

export default card
