import React from "react"
import { Menu,Titulo,NovasAulas } from "./styles";

export default function Aulas() {
    return(
        <Menu>
        <Titulo>Aulas</Titulo>
        <NovasAulas>
            <h2><u> Mais aulas</u></h2>
            <h3>Ops, não encontramos nenhuma aula no momento.</h3>
        </NovasAulas>
        </Menu>
    );
}
