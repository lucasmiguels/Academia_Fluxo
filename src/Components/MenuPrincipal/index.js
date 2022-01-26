import React, { useState,useEffect } from "react";
import {Pergunta, Cadaproduto, Funcionario, Listaprodutos,Cadaula,Cliente,Listaulas, Menu, MenuCliente, TituloCliente, Input, Submeter, MenuFuncionario, TituloFuncionario, EntradaProduto, SaidaProduto} from './styles'
import { aulas } from "./aulasprodutos";
import { produtos } from "./aulasprodutos";

export default function MenuPrincipal() {
    const[cpf,setcpf] = useState('');
    const[numberclass,setnumberclass] = useState('');
    const[actualClass,setActualclass] = useState ({})
    const[avaiable,setAvaiable] = useState(false)
    const[password,setpassword] = useState('')
    const[numberproduct,setnumberproduct] = useState('')
    const[actualProduct,setActualproduct] = useState ({})
    const[avaiableproduct,setAvaiableProduct] = useState(false)

    const renderaulas = aulas.map((item,index) => (
        <Cadaula key = {index}>
            <li> Aula {item.id} de {item.nome} ({item.horario})  </li>
        </Cadaula>
    ));

    const renderprodutos = produtos.map((item,index) => (
        <Cadaproduto key = {index}>
            <li> Produto {item.id}: {item.nome} </li>
        </Cadaproduto>
    ));


    function Reset(){
        setcpf('');
        setnumberclass('');
        setActualclass({});
        console.log("Aula marcada")
    }
    function ResetFuncionario(){
        setpassword('');
        setnumberproduct('');
        setActualproduct({});
        console.log("Obrigado por nos informar!")
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
        <Pergunta> <u>Aluno ou Funcionário?</u> </Pergunta>
        <Cliente>
        <MenuCliente>
            <TituloCliente> Aluno </TituloCliente>
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
        <Listaulas>
            {renderaulas}
        </Listaulas>
        </Cliente>
        <Funcionario>
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
        <Listaprodutos> {renderprodutos} </Listaprodutos>
        </Funcionario>
        </Menu>  
    );
}