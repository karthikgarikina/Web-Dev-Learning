import React from "react";
import { useState,useEffect } from "react";

const UseEffect1 = () =>{
       
     const[cd,setcd] = useState([
        {
            "name":"min"
        },
        {
            "name":"max"
        },
        {
            "name":"sai"
        },
        {
            "name":"sai ram"
        },
        {
            "name":"sivaji"
        }
     ])

     const[cpd,setcpd] = useState([]);
     
     const[uq,setuq] = useState("");
     const fun = (ele)=>{
         console.log(ele.target.value);
         setuq(ele.target.value);
     }

     useEffect(() =>{
          if(uq != ""){
          var temp = cd.filter((ele)=> ele.name.includes(uq));
        
          setcpd(temp)
          }
          else{
            setcpd([]);
          }
     },[uq])
    return(
         <>
           <input type="text" placeholder="serach.." onChange={(event)=> fun(event)}/>
           <div className="parent">
            {
               cpd.map((ele)=>{
                 return ( <div className="child">
                    {ele.name}
                   </div>)
               })    
            }
           </div>
         
         </>
    )
      
}

export default UseEffect1;