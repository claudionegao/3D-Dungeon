import { useState } from "react"
import Styles from "../styles/styles";

function Text(props){
    const [numero, setContador] = useState(1);
    const [rdm, setRandom] = useState(1);

    function contador(){
        setRandom(Math.floor((Math.random() * (20 - 1 + 1)) + 1))
        console.log(rdm)
        setContador(numero + 10)
    }

    return  <div>
                <div>{rdm}</div>
                <button onClick={contador}>Adicionar</button>
                <Styles fontsize={numero}>Hello {rdm}</Styles>
            </div>
}

export default Text