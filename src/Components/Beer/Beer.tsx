import React from 'react';
import axios from 'axios'

import { Beers } from '../../types/Beers'
 
const Beer = () => {

    const [ beer, setBeer] = React.useState<Beers[]>([])

    const buscar = () => {
        axios.get('https://api.punkapi.com/v2/beers/?per_page=8')
            .then(resposta => setBeer(resposta.data))
    }
 
  return (
    <div className="food-beer-list food-shop">
      
        <h1>Tipos de Cerveja</h1>
        <button onClick={buscar}>Buscar Cerveja</button>

        <div className="beers-list">

            {
                beer &&
                beer.map((item: Beers) => (
                    <div className="beer" key={item.id}>
                        <img src={item.image_url} alt={item.name} />
                        <h3>{item.name}</h3>
                        <span>{item.tagline}</span>
                        <small>{item.description}</small>
                    </div>
                ))
            } 
        </div>
    </div>
  );
}

export default Beer;