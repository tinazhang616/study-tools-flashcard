import React from "react";
export default function FlipButton({setIsFrontOfCard}){
    const flipCardHandler = () => {
        setIsFrontOfCard((currentSide) => !currentSide);
      };
    
      return (
        <button type="button" className="btn btn-dark mr-2" onClick={flipCardHandler}>
          Flip
        </button>
      );

}