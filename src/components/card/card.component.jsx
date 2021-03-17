import React from 'react';
import '../card/card.css';

export const Card = (props) => {
    return(
        <div className="card-container">
            <img src={`https://robohash.org/${props.monister.id}?set=set2&size=180x180`} alt=""/>
            <h2>{ props.monister.name }</h2>
        </div>
    );
}