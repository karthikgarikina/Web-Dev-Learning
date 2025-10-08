import { useState } from "react";
import React,{Component} from "react";

const DynamicCardsByHooks=()=>{
    const [cards, setCards] = useState([]);
    const [card, setCard] = useState({ firstname: "" });
    const getData=(key,event)=>{
       setCard({ ...card, [key]: event.target.value });
    }
    const addCard=(e)=>{
         e.preventDefault();
        setCards([...cards,card]);
        setCard({firstname:""});
    }
    const Delete=(delIndex)=>{
        setCards(cards.filter((_,index)=>index!==delIndex))
    }
    return(
        <>
            <form onSubmit={addCard}>
                <label htmlFor="firstname">First Name: </label>
                <input name="firstname" type="text" value={card.firstname} onChange={(event)=>getData("firstname",event)} />
                <button type="submit">Submit</button>
            </form>
            {
                cards.map((ele,index)=>{
                    return(
                        <>
                        <h1>First Name: {ele.firstname}</h1>
                        <button onClick={() => Delete(index)}>Delete</button>
                        </>
                    )
                })
            }
        </>
    )
}
export default DynamicCardsByHooks;
