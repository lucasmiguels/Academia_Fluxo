import styled from "styled-components";

export const Pergunta = styled.h2`
    padding: 20px;
    
`

export const Menu = styled.div`
    background-color:lightgray;
    display:flex;
    flex-direction: column;
    height:70vh;
    align-items:center;
    gap:20px;
    
`

export const MenuCliente = styled.div`
    padding:20px;
    display: flex;
    flex-direction: column;
    height:130px;
    width:200px;
    gap:10px;
    align-items:center;
    background-color: darkslategray;
    color:silver;
    border-radius:20px;
   
`

export const TituloCliente = styled.h4``

export const Input = styled.input`
border:0;
border-radius:10px;

`

export const Submeter = styled.button`
    border:0;
    border-radius:10px;
    width:100px;
    color:silver;
    background-color: ${props =>props.disabled ? 'crimson' : 'green'};
`
export const MenuFuncionario = styled.div`
    padding:20px;
    display: flex;
    flex-direction: column;
    height:130px;
    width:200px;
    gap:10px;
    align-items:center;
    background-color: darkslategray;
    color:silver;
    border-radius:20px;
    `
export const TituloFuncionario = styled.h4``
export const EntradaProduto = styled.button`
    border:0;
    border-radius:10px;
    width:100px;
    color:silver;
    background-color: ${props =>props.disabled ? 'crimson' : 'green'};
`
export const SaidaProduto = styled.button`
    border:0;
    border-radius:10px;
    width:100px;
    color:silver;
    background-color: ${props =>props.disabled ? 'crimson' : 'green'};
`
