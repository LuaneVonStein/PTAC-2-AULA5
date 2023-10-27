import { useState } from "react";
import { useEffect } from "react";
import "./ToListen.css"

export default function ToListen() {

    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState(listaLocalStorage||[]);
    const [id, setId] = useState(listaLocalStorage [listaLocalStorage.length - 1]?.id + 1||1);
    
    useEffect(() => {localStorage.setItem("Lista", JSON.stringify(lista));}, [lista]);

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista,{
         atividade: atividade,
            id: id
        }]);
        setId(id + 1);
        setAtividade("");
    };

    const remover = (id) => {
        const auxLista = [];
        lista.map((lista) => {
         if (lista.id !== id) {
         auxLista.push(lista);
            }
        });
        setLista(auxLista);
    }

    return(
        <div class = "container">
        <h1>Loja de joias</h1>
        <form onSubmit = {salvar}>
        <input type ="text"
        value = {atividade}
         onChange ={(e) => {setAtividade(e.target.value)}} />
               <button>ADD</button>
        </form>
        {lista.map((ativ) => 
        <ul key = {ativ.id}>
                <li>
                  <link to={'/detalhe/${objeto.id}'}>
                    <P>{ativ.atividade}</P>
                    </link>  
       
         <button onClick={() => 
            remover(ativ.id)}>
                REMOVE
                </button>
        </li>
        </ul>
        )}
        </div>
    );
}




