import React,{Component} from "react";
import Cards from "./cards.jsx";
import img from "./assets/react.svg";
import Count from "./hooks.jsx"
function App() {

  var card_details=[
    {
      price : "2000/-",
      brand: "SivajiBrand"
    },
    {
      price : "12000/-",
      brand: "karthiiBrand"
    }
  ];
  return (
    <>
     <Cards data={card_details} image={img}/>
     <Count/>
    </>
  )
}

export default App
