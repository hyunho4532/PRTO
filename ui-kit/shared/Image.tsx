import webStyled from "@emotion/styled"
import mobileStyled from "@emotion/native"

export const MobileImage = mobileStyled.Image<{
    width: number,
    height: number
}>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    margin: 0 auto;
`

export const WebImage = webStyled.img<{
    width: number,
    height: number
}>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    margin: 0 auto;
`