import styled from "styled-components";

export const MenuItem = styled.h3`
    height:5vh;
    cursor:pointer;
    &hover{
        color: silver;
        border-bottom : 2px solid silver;
    }
`
export const Head = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: darkslategray;
    color:silver;
    align-items:center;
    height:15vh;
`
export const HeaderName = styled.h1`
    padding:10px;
   
`
export const HeaderMenu = styled.div`
    display: flex;
    flex-direction: row;
    gap:20px;
    padding-right:10px;
    padding-top:10px;
`