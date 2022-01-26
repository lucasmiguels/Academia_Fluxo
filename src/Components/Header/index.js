import React from "react";
import { MdOutlineLogin, MdPersonOutline, MdOutlineFitnessCenter, MdOutlineCalendarToday } from "react-icons/md";
import { MenuItem,Head,HeaderName,HeaderMenu } from "./styles";


export default function Header() {
    const itensMenu = [
        {nome: 'Inscreva-se', icone: <MdOutlineLogin/>},
        {nome: 'Aulas', icone: <MdPersonOutline/>},
        {nome: 'Treino', icone: <MdOutlineFitnessCenter/>},
        {nome: 'Agenda', icone: <MdOutlineCalendarToday/>},   
    ]
    const renderList = itensMenu.map((item,index) => (
        <MenuItem key = {index}>
            {item.icone}
            {item.nome}
        </MenuItem>
    ));
    return(
        <Head>
            <HeaderName> Academia Fluxo </HeaderName>
            <HeaderMenu> {renderList} </HeaderMenu>
        </Head>
        
    );
}
