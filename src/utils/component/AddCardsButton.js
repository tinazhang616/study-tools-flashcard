import React from "react"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"
export default function AddCardsButton({deckId}){
    const history = useHistory();
    return <button
    type="button"
    className="btn btn-success"
    onClick={() => history.push(`/decks/${deckId}/cards/new`)}
  >
    <span className="oi oi-plus" /> Add Cards
  </button>
}