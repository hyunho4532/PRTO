import styled from "@emotion/styled"


export const Image = styled.img<{
    width?: number,
    height?: number
}>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    margin: 0 auto;
`