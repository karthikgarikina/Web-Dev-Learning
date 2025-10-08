import React from "react";
import { useState } from "react";
function ForFiles(){
    var [imagePath,setImagePath]=useState(null);

    const Change=(event)=>{
        const path=URL.createObjectURL(event.target.files[0])
        setImagePath(path)
    }

    return(
        <>
           <input onChange={(event)=>Change(event)} type="file" />
           <img src={imagePath} alt="Cracked" />
        </>
    )
}
export default ForFiles;