import React from "react";
import { MdHome, MdPersonOutline, MdOutlineFitnessCenter, MdOutlineCalendarToday } from "react-icons/md";
import { Link } from "react-router-dom";
import { MenuItem,Head,HeaderName,HeaderMenu } from "./styles";


export default function Header() {
    const itensMenu = [
        {nome: 'Home', icone: <MdHome/>, path:"/"},
        {nome: 'Aulas', icone: <MdPersonOutline/>,path:"/aulas"},
        {nome: 'Treino', icone: <MdOutlineFitnessCenter/>,path:"/treino"},
        {nome: 'Agenda', icone: <MdOutlineCalendarToday/>,path:"/agenda"},   
    ]
    const renderizando = itensMenu.map((item,index) => (
        <MenuItem key = {index}>
            <Link to={item.path}>
                {item.nome}
                {item.icone}
            </Link>
        </MenuItem>
    ));
    return(
        <Head>
            <HeaderMenu> {renderizando} </HeaderMenu>
            <HeaderName> JoaquimTech </HeaderName>
        </Head>
        
    );
}
