import BasicExample from "../components/bars"
import Geraldiv from "../styles/game"

function Game(){
    return  <Geraldiv>
                <section>
                    <section>
                        <h1>Self</h1>
                        <BasicExample/>
                    </section>
                    <section>
                        <h1>Enemy</h1>
                    </section>
                </section>
            </Geraldiv>
}

export default Game