import Icon from "../icon/Icon"
import styled from 'styled-components';

export default function Footer({rowAnswer,questions,answer})
{
    function resultAnswes () {

        const result = rowAnswer.find(value => value === 'error');
        return (
            <>
                {result ? (<p>😥 Putz... <br />
                Ainda faltam alguns...Mas não desanime!</p>) : (<p>🥳 Parabéns!<br/>Você não esqueceu de nenhum flashcard! </p>)}
            </>
        )
    }
    return (
        <FooterS>
        { rowAnswer.length === 8 ? (
                    resultAnswes()
                ): (null)}
            {
                rowAnswer.map(row=>{if(row.status!=='not_answer')
                {return <Icon status={row}/>}})
            }
            <p>{answer}/{questions.length} CONCLUIDOS</p>
        </FooterS>       
    )
 }
 const FooterS =styled.div`{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 1;
    width: 100%;
    min-height: 70px;
    padding: 25px 115px;
    font-size: 18px;
    color: black;
    position: fixed;
    text-align: center;
  }`
 
