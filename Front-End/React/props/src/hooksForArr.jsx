import React,{Component} from "react";
import { useState } from "react";
const HooksForArr=()=>{
    const [arr,setArr]=useState([1,2,3]);
    const deleteIdx=(delIndex)=>{
        var temp=arr;
        temp=temp.filter((ele,index)=>index!==delIndex)
        setArr(temp)
    }
    const Addele=()=>{
        setArr([...arr,arr.length+1])
    }
    return(
        <>
          {
            arr.map((ele,index)=>{
               return( 
                <>
                <h1>{ele} {index}</h1>
                <button onClick={()=>deleteIdx(index)}>Delete</button>
                </>
               )
            })
          }
          {
            <button onClick={()=>Addele()}>AddNextEle</button>
          }
        </>
    )
}
export default HooksForArr