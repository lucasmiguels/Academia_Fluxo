import React, { useState,useEffect } from "react";
import {Pergunta, Menu, MenuCliente, TituloCliente, Input, Submeter, MenuFuncionario, TituloFuncionario, EntradaProduto, SaidaProduto} from './styles'

export default function MenuPrincipal() {
    const[cpf,setcpf] = useState('');
    const[numberclass,setnumberclass] = useState('');
    const[actualClass,setActualclass] = useState ({})
    const[avaiable,setAvaiable] = useState(false)
    const[password,setpassword] = useState('')
    const[numberproduct,setnumberproduct] = useState('')
    const[actualProduct,setActualproduct] = useState ({})
    const[avaiableproduct,setAvaiableProduct] = useState(false)


    function Reset(){
        setcpf('');
        setnumberclass('');
        setActualclass({});
    }
    function ResetFuncionario(){
        setpassword('');
        setnumberproduct('');
        setActualproduct({});
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
   
    useEffect(() => {
        setActualproduct({
            identificador: password,
            numeroaula: numberproduct
        });
        if (!password || !numberproduct){
            setAvaiableProduct(false)
        } else {
            setAvaiableProduct(true)
        };
    }, [password,numberproduct]);
   
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
        <MenuFuncionario>
            <TituloFuncionario> Funcionario </TituloFuncionario>
            <Input
             placeholder=' Digite sua senha'
             value={password}
             onChange={(event) => setpassword(event.currentTarget.value)}
             ></Input>
            <Input 
            placeholder=' Escolha o número do produto'
            value={numberproduct}
            onChange={(event) => setnumberproduct(event.currentTarget.value)}
            ></Input>
            <EntradaProduto onClick={ResetFuncionario} disabled={!avaiableproduct}> Entrada </EntradaProduto>
            <SaidaProduto onClick={ResetFuncionario} disabled={!avaiableproduct}> Saida </SaidaProduto>
        </MenuFuncionario>
        </Menu>  
    );
}