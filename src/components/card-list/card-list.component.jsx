import React from 'react';
import './card-list.css';
import { Card } from '../card/card.component'

export const CardList = (props) => { 
return( <div className="card-list">
       {
         props.monisters.map(monister => (
           <Card key={monister.id} monister={monister}/>
         ))
        }
</div>);
}