import { useState } from "react";
import React,{Component} from "react";

const DynamicCardsByHooks=()=>{
    const [cards, setCards] = useState([]);
    const [card, setCard] = useState({ "firstname": "", "image":"" });
    const getData=(key,event)=>{
       
       if(key=="image"){
        let temp=event.target.files[0];
        const url=URL.createObjectURL(temp);
        console.log(url);
        setCard({ ...card, [key]:url});
       }
       else{
        setCard({ ...card, [key]: event.target.value });
       }
    }
    const addCard=(e)=>{
         e.preventDefault();
        setCards([...cards,card]);
        setCard({firstname:""});
        console.log(card);
    }
    const Delete=(delIndex)=>{
        setCards(cards.filter((_,index)=>index!==delIndex))
    }
    return(
        <>
            <form onSubmit={addCard}>
                <label htmlFor="firstname">First Name: </label>
                <input name="firstname" type="text" value={card.firstname} onChange={(event)=>getData("firstname",event)} />
                <input type="file" name="image" onChange={(event)=>getData("image",event)} />
                <button type="submit">Submit</button>
            </form>
            {
                cards.map((ele,index)=>{
                    return(
                        <>
                        <h1>First Name: {ele.firstname}</h1>
                        <img src={ele.url} alt="cracked" />
                        <button onClick={() => Delete(index)}>Delete</button>
                        </>
                    )
                })
            }
        </>
    )
}
export default DynamicCardsByHooks;
