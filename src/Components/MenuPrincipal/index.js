import React, { useState,useEffect } from "react";
import {Pergunta, Menu, MenuCliente, TituloCliente, Input, Submeter} from './styles'

export default function MenuPrincipal() {
    const[cpf,setcpf] = useState('');
    const[numberclass,setnumberclass] = useState('');
    const[actualClass,setActualclass] = useState ({})
    const[avaiable,setAvaiable] = useState(false)

    function Reset(){
        setcpf('');
        setnumberclass('');
        setActualclass({});
    }

    useEffect(() => {
        setActualclass({
            identificador: cpf,
            numeroaula: numberclass
        });
        if (!cpf || !numberclass){
            setAvaiable(false)
        } else {
            setAvaiable(true)
        };
    }, [cpf,numberclass]);
   
    return(
        <Menu>
        <Pergunta> <u>Quem é você?</u> </Pergunta>
        <MenuCliente>
            <TituloCliente> Cliente </TituloCliente>
            <Input
             placeholder=' Digite seu CPF'
             value={cpf}
             onChange={(event) => setcpf(event.currentTarget.value)}
             ></Input>
            <Input 
            placeholder=' Escolha o número da aula'
            value={numberclass}
            onChange={(event) => setnumberclass(event.currentTarget.value)}
            ></Input>
            <Submeter onClick={Reset} disabled={!avaiable}> Submeter </Submeter>
        </MenuCliente>
        </Menu>  
    );
}