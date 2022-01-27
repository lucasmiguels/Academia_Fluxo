import React from "react"
import { Menu,Titulo, NovosAgendamentos } from "./styles";

export default function Agenda() {
    return(
        <Menu>
        <Titulo> Agenda </Titulo>
        <NovosAgendamentos>
           <h2> <u> Seus agendamentos </u></h2>
           <h3> Ops, não encontramos nenhum agendamento seu. </h3>
        </NovosAgendamentos>
        </Menu>
    );
}
