import styled from "styled-components";

const Styles = styled.h1`
    color: red;
    font-size: ${props => `${props.fontsize}px`};
`

const Styles2 = styled(Styles)`
    
`

export default Styles