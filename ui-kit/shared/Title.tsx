import styled from '@emotion/native'

export const Title = styled.Text<{
    fontSize: string,
    align?: string
}>`
    font-size: ${(props) => props.fontSize}px;
    text-align: ${(props) => props.align != null ? props.align : 'left'};
`