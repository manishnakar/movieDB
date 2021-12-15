import React from 'react'
import {img_300, unavailable} from '../../config/config'
import './card.css'
import { Badge }  from '@material-ui/core'


function card(props) {
    
    const { poster_path, title,name, release_date,first_air_date, vote_average} = props.data

    const title1 = title || name

    return (
        <div className="media">
            <Badge badgeContent={vote_average} color={vote_average>6?'primary': 'secondary'} />
            <img className="poster" src={poster_path? `${img_300}/${poster_path}` : unavailable} alt={title1} />
            <b className="title">{title1}</b>
            <span className="subTitle">{first_air_date? "TV series" : "Movie" }
            <span className="subTitle">{release_date || first_air_date}</span>
            </span>
            
        </div>
    )
}

export default card
