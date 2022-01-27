import React from "react"
import { Menu,Titulo,NovosTreinos } from "./styles";

export default function Treino() {
    return(
        <Menu>
        <Titulo>Treino</Titulo>
        <NovosTreinos>
            <h2> <u>Treinos disponíveis:</u> </h2>
            <h3> Ops, seus treinos ainda não foram cadastrados.</h3>
        </NovosTreinos>
        </Menu>
    );
}
