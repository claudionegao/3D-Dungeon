import BasicExample from "../components/bars"
import Geraldiv from "../styles/game"

function Game(){
    return  <Geraldiv>
                <div>
                    <div>
                        <h1>Self</h1>
                        <BasicExample/>
                    </div>
                    <div>
                        <h1>Enemy</h1>
                    </div>
                </div>
            </Geraldiv>
}

export default Game