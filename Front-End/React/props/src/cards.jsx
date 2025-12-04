import React, { Component } from "react";
const Cards = (promps) => {
  return (
    <>
      {
        promps.data.map(ele => {
          console.log(ele.price)
          return (
            <>
            <img src={promps.image} alt="" />
            {/* <h1>{ele.price}</h1> */}
            </>
          )
        })
      }
    </>
  )
}
export default Cards;