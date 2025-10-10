import React from "react";
import { useState } from "react";
import './Home.css';
function Home(){
    const [form,setForm]=useState({'name' : "",
                           'college' : "",
                           'email':"",
                           'age':"",
                           'image':"",
                           'Discription': ""
                         });
    const [cards,setCards]=useState([]);
    
    const getData=(event,key)=>{
        event.preventDefault();
        if(key=='image'){
            let temp=event.target.files[0];
            const url=URL.createObjectURL(temp);
            setForm({...form,[key]:url});

        }
        else{
            setForm({...form,[key]:event.target.value});
        }
    }
    const Submit = (event) => {
        event.preventDefault();
        setCards(...cards,form);
        setForm({'name' : "",
                           'college' : "",
                           'email':"",
                           'age':"",
                           'image':"",
                           'Discription': ""
                         });
        console.log(cards);                 
    }

    return(
        <>
           <div className="main">
              <div className="view">View Cards</div>
              <h1>Create form</h1>
              <form action={(event)=>Submit(event)}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" value={form.name} onChange={(event)=>getData(event,'name')} /><br /><br />

                    <label htmlFor="college">College: </label>
                    <input type="text" name="college" value={form.name} onChange={(event)=>getData(event,'name')} /><br /><br />
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" value={form.name} onChange={(event)=>getData(event,'name')} /><br /><br />
                    <label htmlFor="age">Age: </label>
                    <input type="number" name="age" value={form.name} onChange={(event)=>getData(event,'name')} /><br /><br />
                    
                    <label htmlFor="image">Upload image </label><br />
                    <input type="file" name="image" value={form.name} onChange={(event)=>getData(event,'name')} /><br /><br />
                    <textarea name="discription" id="discription" placeholder="Some Words.." rows={5} cols={35} value={form.name} onChange={(event)=>getDate(event,'name')} ></textarea><br />
                    <button type="submit">Submit</button>
              </form> 

           </div>
        </>
    )
}
export default Home;