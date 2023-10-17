import React from "react";
import "./../scss/Book.scss";
import { useSelector } from "react-redux";

const Book = () => {
  const citasAgendadas = useSelector((store) => store.bookingReducer);
console.log(citasAgendadas)
  return (
    
    <>
    <div>Book</div>

    <div className="mainBook">
      
    
    <div className="mainBook_one">Campus One</div>
    <div className="mainBook_two">Campus Two</div>
    
    </div>
    </>
    )
}

export default Book