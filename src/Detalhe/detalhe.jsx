import { useParams } from "react-router-dom";
import Card from '../Componente/Card';

export default function Detalhe(){
    const { id } = useParams();
    const lista = JSON.parse(localStorage.getItem("Lista"));
    console.log(lista);

    lista.filter( (objeto) => {
        if(objeto.id == id){
            return objeto;
        }
        return null
    } )

    console.log(atividade[0] );

    return(
        
           <Card atividade={atividade[0]} />
        
    )
}