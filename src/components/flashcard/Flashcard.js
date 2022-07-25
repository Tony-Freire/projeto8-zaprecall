import React from "react"
import Label from "../label/Label.js";
import CardContent from "../cardContent/CardContent.js";



export default function Flashcard ({title,flip,index,flipCard, question, answer, status, select}){
    return(
        <>
        {!flip?<Label title={title} index={index} flipCard={flipCard}status={status}/>: <CardContent question={question} select={select}
        answer={answer} index={index} />} 
        </>
    )
}