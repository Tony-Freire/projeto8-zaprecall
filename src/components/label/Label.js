import Icon from "../icon/Icon.js";
import "./style.css";


export default function Label({title, index, flipCard, status}){
    return (
        <div className={`label ${status}`} onClick={ ()=>flipCard(index)}>
             {title} 
             <Icon status={status}/>
        </div>  
    )
} 

