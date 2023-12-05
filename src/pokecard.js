import React from 'react';

const PokeCard = (props) => {
    let source = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
    return <div className="card">
        <p className="characterName">{props.name}</p>
        <img className="cardImg" src={source} alt="" />
        <p>Type: {props.type}</p>
        <p>Exp: {props.base_experience}</p>
    </div>
}



export default PokeCard;