import React from "react";
import setinha from "./../../assets/img/setinha.svg";
import "./style.css";

export default function CardContent({question, answer, select, index})
{
    const [status, setStatus] = React.useState(false);
    return(
    <>
    {!status?(<div className="label open">
            {question}
            <img src={setinha} alt='icon' className = "icone"onClick={()=>setStatus(true)}/>
        </div>):
        <div className="label open answer">
           {answer}
           <div>
           <div className="button error" onClick={()=>select(index, 'error')}>Não Lembrei</div>
           <div className="button almost" onClick={()=>select(index, 'almost')}>Quase não Lembrei</div>
           <div className="button zap" onClick={()=>select(index, 'correct')}>Zap!</div>
           </div>
           
        </div>

        }
       
    </>
        
    )
}