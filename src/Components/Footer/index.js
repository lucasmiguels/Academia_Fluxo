import React from "react";
import {Foot,Endereco,Telefone} from './styles';

export default function Footer() {
    return(
        <Foot>
            <Endereco> Av. Érico Veríssimo, 390 - Barra da Tijuca, Rio de Janeiro - RJ, 22621-180 </Endereco>
            <Telefone> Contato: (21) 996161562 </Telefone>
        </Foot>
    );
}