import styled from "styled-components";

export const Styles = styled.h1`
    color: red;
    font-size: ${props => `${props.fontsize}px`};
`

export const Styles2 = styled(Styles)`
    
`