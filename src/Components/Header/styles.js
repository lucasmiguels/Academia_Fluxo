import styled from "styled-components";

export const MenuItem = styled.h4`
    height:20px;
    color:silver;
    display:flex;
    align-items: center;
    justify-content:center;
    gap: 5px;
    cursor:pointer;
    & a {
        color:silver;
        text-decoration:none;
       
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
    padding-left:10px;
    padding-top:10px;
`
