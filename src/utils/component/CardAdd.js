import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { createCard, readDeck } from "../api";
export default function CardAdd(){
    //useparams find deck id and store deck data inside of the useState
    const {deckId} = useParams();
    const [deckName,setDeckName]=useState([])
    //store front and back data inside of the useState
    const [front,setFront]=useState("")
    const [back,setBack]=useState("")
    const history = useHistory();
    useEffect(()=>{
        async function loadData(){
            try{
                const res =await readDeck(deckId);
                const deckData = await res;
                console.log("This is the deck in cardAdd",deckData)
                setDeckName(deckData.name)
            }catch(err){
                console.log(err)
            }
        }
        loadData();
    },[deckId])


    const handleFrontChange=(event)=>{setFront(event.target.value)}
    const handleBackChange=(event)=>{setBack(event.target.value)}
    const handleSave=(event)=>{
        event.preventDefault()
        createCard(deckId,{front:front,back:back}).then((data)=>history.push(`/decks/${deckId}/cards/new`))
        setBack("");
        setFront("");
    }
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/"><span className="oi oi-home"/> Home</Link></li>
                    <li className="breadcrumb-item"><Link to="#">{deckName}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Add Card</li>
                </ol>
            </nav>
            <h3>{deckName}:Add Card</h3>
            <form>
                <label htmlFor="front">
                    Front<br/>
                    <textarea required
                        id="front"
                        type="text"
                        name="front"
                        onChange={handleFrontChange}
                        placeholder="Front side of card"
                        value={front}
                    />
                </label>
                <br />
                <label htmlFor="back">
                    Back<br/>
                    <textarea required
                        id="back"
                        type="textarea"
                        name="back"
                        onChange={handleBackChange}
                        placeholder="Back side of card"
                        value={back}
                    />
                </label>
                <br />
                <button className="btn btn-secondary mr-2" onClick={()=>window.location.replace("/")}>Done</button>
                <button className="btn btn-primary" type="button" onClick={handleSave}>Save</button>
            </form>
        </div>

    )

}