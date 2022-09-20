//styled components
import styled from "styled-components";

const TextStyled = styled.p`
`
// /styled components
const Text = ({children, className}) => {
    return (
        <TextStyled className={className}>{children}</TextStyled>
    )
}
export default Text