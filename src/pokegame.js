import React from "react";
import Pokedex from "./pokedex";
import { shuffle, totalExp } from "./helpers"

const Pokegame = ({characters}) => { 

let newDeck = shuffle(characters);

const deck1 = newDeck.slice(0,4);
const deck2 = newDeck.slice(4);
const exp1 = totalExp(deck1);
const exp2 = totalExp(deck2);
let winner;
exp1 > exp2 ? winner = 1 : winner = 2


return <div className="game">
    <div className="deckOne">
    < Pokedex characters={ deck1 } winner={winner === 1 ? true : false}/>
    </div>
    <div className="deckTwo">
    < Pokedex characters={ deck2 } winner={winner === 2 ? true : false}/>
    </div>
    </div>

}

export default Pokegame;