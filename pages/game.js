import { useState } from "react";
import Atk from "../components/attack"
import EnHp from "../components/enemy_hp"
import SelfHP from "../components/self_life"
import Geraldiv from "../styles/game"

function Game(){
    const [enehp, setEne] = useState(100);
    const [selfhp, setSelf] = useState(100);
    const [rdm, setRandom] = useState(1);

    return  <Geraldiv>
                <section>
                    <section>
                        <h1>Self</h1>
                        <SelfHP>{selfhp}%</SelfHP>
                        <Atk rdm={rdm} dice={setRandom} current={enehp} damage={setEne}>Attack</Atk>
                    </section>
                    <section>
                        <h1>Enemy</h1>
                        <EnHp>{enehp}%</EnHp>
                    </section>
                </section>
            </Geraldiv>
}

export default Game