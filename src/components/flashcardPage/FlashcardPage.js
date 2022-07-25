import React from "react";
import logo from "./../../assets/img/logo-pequeno.svg"
import Flashcard from "../flashcard/Flashcard.js";
import Footer from "../footer/Footer";
import "./style.css";

const questionsArr =[
  { front: "O que é JSX?", back: "Uma extensão de linguagem do JavaScript", flip:false},
  { front: "O React é __", back: "Uma biblioteca JavaScript para construção de interfaces", flip:false },
  { front: "Componentes devem iniciar com __", back: "Letra maiúscula",flip:false },
  { front: "Podemos colocar __ dentro do JSX", back: "Expressões",flip:false },
  { front: "O ReactDOM nos ajuda __", back: "Interagindo com a DOM para colocar componentes React na tela",flip:false },
  { front: "Usamos o npm para __", back: "Gerenciar os pacotes necessários e suas dependências",flip:false },
  { front: "Usamos o props para __", back: "Passar diferentes informações para componentes",flip:false },
  { front: "Usamos estado (state) para __", back: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",flip:false}
];

let questionsData = questionsArr.map(value=>{return{...value, status:'not_answer' }})
questionsData = questionsData.sort(() => Math.random() - 0.5);

export default function FlashcardPage(){ 
    const [questions, setQuestions]= React.useState(questionsData);
    const [answer, setAnswers]=React.useState(0);
    const [rowAnswer, setRowAnswer]= React.useState([]);

function flipCard(CardIndex) 
{
  let newQuestions = questions.map((value,index)=>
   {
    if(index===CardIndex)
    {
        return {...value, flip:true
        }

    }
    else
    {
        return{
            ...value,
            flip:false
        }
    }   
   })
   setQuestions([...newQuestions]);
}
function SelectOption(CardIndex,status)
{
  let newQuestions = questions.map((value,index)=>
   {
    if(index===CardIndex)
    {
        return {...value, flip:false, status:status
        }

    }
    else
    {
        return{
            ...value,
            flip:false
        }
    }   
   })
   setQuestions([...newQuestions]);
   setAnswers(answer+1);
   setRowAnswer([...rowAnswer,status])

}

    return (
        <div className="deck"> 
        <div className="header" >
            <img src={logo}  alt=""/> 
            <h1>Zap Recall</h1>
        </div> 
        <div className="box">
            { questions.map((value, index) => <Flashcard 
            title={`Pergunta${index+1}`}
            flip={value.flip} 
            index={index} 
            flipCard={flipCard}
            question={value.front}
            answer={value.back}
            status={value.status}
            select={SelectOption}/>)
            }
        </div>
        <Footer rowAnswer={rowAnswer}
                questions={questions}
                answer={answer}
        ></Footer>
    </div>       
    ) 

}