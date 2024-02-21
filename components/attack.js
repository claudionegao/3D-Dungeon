import { useState } from "react";

function Atk(props) {
    
    return <button onClick={() => Damage(props)}>{props.children}</button>
    
}

function Damage(props){
    props.dice(Math.floor((Math.random() * (20 - 1 + 1)) + 1))
    
    if (props.current - props.rdm < 1) {
        console.log(props.rdm)
        props.damage(100)
        return
    }
    else{
        props.damage(props.current - props.rdm)
        if (props.current - props.rdm < 1) {
            props.damage(100)
        }
        console.log(props.rdm)
    }
}

export default Atk