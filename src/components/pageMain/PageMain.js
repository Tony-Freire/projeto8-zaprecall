import Logo from "./../../assets/img/logo.svg";
import styled from 'styled-components';


export default function PageMain({setVisible})
{
    return (
        <Main>
            <img src={Logo} alt ="Zap Recall"/>
            <h1>ZapRecall</h1>
            <button onClick={()=> setVisible(false)}>Iniciar Recall</button>
        </Main>
    )
}

const Main = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    position: absolute;
    background-color: #FB6B6B;
  
   * {
    margin-bottom: 30px; 
  }
  
   h1 {
    font-family: "Righteous", cursive;
    font-size: 36px;
    color: white;
  }
  
   img {
    width: 136px;
    height: 161px;
  }
  
  button {
    width: 246px;
    height: 54px; 
    padding: 16px 22px;
    border-radius: 5px;
    color: #D70900;
    border: 1px;
    font-family: 'Recursive', monospace;
   font-weight: 400;
   font-size: 18px;
    line-height: 22px;
    cursor: pointer;
  }
  
   button:hover {
    background-color: #cea2a0;};`

