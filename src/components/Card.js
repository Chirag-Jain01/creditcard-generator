import React from "react";
import "../components/card.css";
function Card({ cardNumber, cardholderName,expirationMonth,cvc,expirationYear }) {
  let number = "0000 0000 0000 0000";
  let name = "Chirag jain"
  let expiration = "02/10"
  let cvvNumber = "000"
  return (
    <div className="div1">
      <div className="frontCardDetails">
        <div className="topCircle">
        <p className="circle"></p>
        <p className="circle1"></p>
        </div>
        <h4 className="cardNumber">{cardNumber||number} </h4>
        <h4 className="cardName">{cardholderName||name}</h4>
        <h4 className="cardExpirtion">{expirationMonth&&expirationYear || expiration}</h4>
      </div>

      <div className="backCardDetails">
        <div className="blackBlock"></div>
        <div className="secondBlock">
          <div className="cvvDesign">
            {cvc||cvvNumber}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
