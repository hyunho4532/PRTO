import styled from '@emotion/native'

export const Title = styled.Text<{
    fontSize: string,
    align?: string,
    paddingTop?: string
}>`
    font-size: ${(props) => props.fontSize}px;
    text-align: ${(props) => props.align != null ? props.align : 'left'};
    padding-top: ${(props) => props.paddingTop}px;
    font-family: 'Pretendard';
`