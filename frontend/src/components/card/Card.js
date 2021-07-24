import React from 'react'
import "./card.css"

const Card = (props) => {
    return (
    <div className="main__cards2">
            <div className="card2">
                 <div className="card-inner2">
                    <p className="text-primary-p">{props.titulo}</p>
                    <span className="font-bold text-title">{props.valor}</span>
             </div>
        </div>

    </div>
    )
}

export default Card
