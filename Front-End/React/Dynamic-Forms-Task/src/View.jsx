import React from "react";
import Store from "./Store";
import { useContext } from "react";
import './View.css'

function View(){
    const {cards}=useContext(Store);
    return(
        <div className="cards">
            {
                cards.map(card=>{
                    return(
                        <div className="card">
                            <img src={card.image} alt="Img Creacked" />
                            <h4>Name: {card.name}</h4>
                            <h4>College: {card.college}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default View;