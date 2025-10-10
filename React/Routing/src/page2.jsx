import React from "react";
import Store from "./Store";
import { useContext } from "react";
import { Link } from "react-router-dom";
function Page2(){
    const {Count,setCount}=useContext(Store)
    return(
        <>
           <h1>Page-2</h1>
           <h2>Count:{Count}</h2>
           <button onClick={()=>{setCount(Count-1)}}>minus</button> <br />
           <Link to="/">Go to Page-1</Link>
        </>
    )
}
export default Page2;