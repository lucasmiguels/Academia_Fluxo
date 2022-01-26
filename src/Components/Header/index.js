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
    const renderizando = itensMenu.map((item,index) => (
        <MenuItem key = {index}>
            {item.nome}
            {item.icone}
        </MenuItem>
    ));
    return(
        <Head>
            <HeaderMenu> {renderizando} </HeaderMenu>
            <HeaderName> Academia Fluxo </HeaderName>
        </Head>
        
    );
}
