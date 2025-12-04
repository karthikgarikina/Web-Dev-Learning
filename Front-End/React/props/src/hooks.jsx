import React,{Component} from "react";
import { useState } from "react";
const hooks=()=>{
    const [cnt,setCnt]=useState(0);
    const Increment=()=>{
        setCnt(cnt+1);
    }
    return(
        <>
            
            <h1>Count: {cnt}</h1>
            <button onClick={Increment}>Increment</button>
        </>
    )

}
export default hooks;