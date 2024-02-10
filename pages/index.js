import { useState } from "react"
import {Styles} from "./styles"

function Home() {
    return <Text>Home</Text>
}

function Text(props){
    const [numero, setContador] = useState(1);

    function contador(){
        setContador(numero + 10)
    }

    return  <div>
                <div>{numero}</div>
                <button onClick={contador}>Adicionar</button>
                <Styles fontsize={numero}>Hello</Styles>
            </div>
}


export default Home