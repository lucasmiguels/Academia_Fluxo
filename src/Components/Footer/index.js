import React from "react";
import {Foot,Endereco,Telefone} from './styles';

export default function Footer() {
    return(
        <Foot>
            <Endereco> Centro de Tecnologia - Av. Athos da Silveira Ramos, 149 </Endereco>
            <Telefone> Contato: (21) 996161562 </Telefone>
        </Foot>
    );
}