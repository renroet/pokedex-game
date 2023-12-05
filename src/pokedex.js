import React from 'react';
import PokeCard from './pokecard';
import { totalExp } from './helpers';

const Pokedex = ({ characters, winner }) => {

    const exp = totalExp(characters)

    const cards = characters.map((el) => 
    PokeCard(el)
    ) 
    return <div key={ cards[0] } className="deck">
        { cards }
        <p className="exp">{ exp }</p>
        <p className="winner"> {winner ? "THIS DECK WINS!!" : ""}</p>
            </div>
}

export default Pokedex;
