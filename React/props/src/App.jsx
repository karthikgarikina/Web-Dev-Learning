import React,{Component} from "react";
import Cards from "./cards.jsx";
import Count from "./hooks.jsx"
import HooksForArr from "./hooksForArr.jsx";
import HooksTask from "./hooksTask.jsx";
import DynamicCardsByHooks from "./dynamicCardsByHooks.jsx";
import UseEffect1 from "./useEffect1.jsx";
function App() {

  // var card_details=[
  //   {
  //     price : "2000/-",
  //     brand: "SivajiBrand"
  //   },
  //   {
  //     price : "12000/-",
  //     brand: "karthiiBrand"
  //   }
  // ];
  return (
    <>
     {/* <Cards data={card_details} image={img}/>
     <Count/> */}
     {/* <HooksForArr/> */}
     {/* <HooksTask/> */}
     {/* <DynamicCardsByHooks/> */}

      <UseEffect1 />
    </>
  )
}

export default App
