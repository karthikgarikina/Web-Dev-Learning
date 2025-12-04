import React from "react";
import Store from "./Store";
import { useContext } from "react";
import { Link } from "react-router-dom";
function Page1(){
    const {Count,setCount}=useContext(Store);
    return(
        <>
          <h1>Page-1</h1>
          <h2>Count:{Count}</h2>
          <button onClick={()=>(setCount(Count+1))}>Add</button><br />
          <Link to="/page2">Go to Page-2</Link>
        </>
    )

}
export default Page1;