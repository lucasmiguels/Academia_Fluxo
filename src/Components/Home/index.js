import React, { useState,useEffect } from "react";
import {Pergunta,Image, Cadaproduto, Funcionario, Listaprodutos, QuantidadeItem, Quantidade, MaisouMenos,Cadaula,Cliente,Listaulas, Menu, MenuCliente, TituloCliente, Input, Submeter, MenuFuncionario, TituloFuncionario, EntradaProduto, SaidaProduto} from './styles'
import { aulas } from "./aulasprodutos";
import { produtos } from "./aulasprodutos";

export default function Home() {
    const[cpf,setcpf] = useState('');
    const[numberclass,setnumberclass] = useState('');
    const[actualClass,setActualclass] = useState ({})
    const[avaiable,setAvaiable] = useState(false)
    const[password,setpassword] = useState('')
    const[numberproduct,setnumberproduct] = useState('')
    const[actualProduct,setActualproduct] = useState ({})
    const[avaiableproduct,setAvaiableProduct] = useState(false)
    const[quantity,setQuantity] = useState(0)

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
        setQuantity(0)
        console.log("Obrigado por nos informar!")
    }
    function Aumentar(){
        setQuantity(quantity + 1);
    }
    function Diminuir(){
        if (quantity === 0){
            console.log("Erro ao decrementar")
        } else setQuantity(quantity-1);
    }

    useEffect(() => {
        setActualclass({
            identificador: cpf,
            numeroaula: numberclass,
            aulatual: actualClass
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
            numeroaula: numberproduct,
            produtoatual: actualProduct,
            quantidade: quantity
        });
        if (!password || !numberproduct || quantity ===0){
            setAvaiableProduct(false)
        } else {
            setAvaiableProduct(true)
        };
    }, [password,numberproduct,quantity]);
   
    return(
        <Menu>
        <Pergunta> <u>Aluno ou Funcionário?</u> </Pergunta>
        <Cliente>
        <Image src="/imagens/download.jpg" alt="Image" width="275" height="183"/>
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
            <h4> Aulas disponíveis: </h4>
            {renderaulas}
        </Listaulas>
        <Image src="/imagens/download (1).jpg" alt="Image" width="275" height="183"/>
        </Cliente>
        <Funcionario>
        <Image src="/imagens/download (2).jpg" alt="Image" width="275" height="183"/>
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
            <QuantidadeItem>
                <Quantidade>{quantity} unidade(s)</Quantidade>
                <MaisouMenos onClick={Aumentar}> + </MaisouMenos>
                <MaisouMenos onClick={Diminuir}> - </MaisouMenos>
            </QuantidadeItem>
            <EntradaProduto onClick={ResetFuncionario} disabled={!avaiableproduct}> Entrada </EntradaProduto>
            <SaidaProduto onClick={ResetFuncionario} disabled={!avaiableproduct}> Saida </SaidaProduto>
        </MenuFuncionario>
        <Listaprodutos>
            <h3> Produtos registrados: </h3>
             {renderprodutos} </Listaprodutos>
    
        <Image src="/imagens/download (3).jpg" alt="Image" width="275" height="183"/>
        
        </Funcionario>
        </Menu>  
    );
}