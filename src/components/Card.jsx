import React from 'react'
import './card.css'

import Star from '../assets/star.png'
 
export default function Card(props) {
    console.log(props.card)

    let badgeText
    if (props.openSpots === 0 ) {
        badgeText = 'SOLD OUT'
    }else if(props.location === "Online") {  
        badgeText = 'ONLINE'
    }
    return (
        <section className='card'>
             { badgeText &&
            <div className='card__image-wrapper'>
              <p className='card__img-text'>{badgeText}</p> 
             </div>  }
            <img src={`src/assets/${props.coverImg}`} alt="" className='card__image'/>

            <div className='card__rate-details'>
                <img src={Star} className="star-icon" alt="" />
                <p>{props.stats.rating}</p>
                <p>({props.stats.reviewCount}) · </p>
                <p>{props.location}</p>
            </div>
            <div className="card__title">
                <p >{props.title}</p>
                <p className='card__rate1'><strong>{props.price} </strong>/ person</p> 
            </div>
        </section>
    )
}