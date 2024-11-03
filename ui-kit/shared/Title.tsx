import styled from '@emotion/native'

export const Container = styled.View<{
    alignItems?: string,
    justifyContent?: string
}>`
    flex: 1;
    align-items: ${(props) => props.alignItems};
    justify-content: ${(props) => props.justifyContent};
`;

export const Title = styled.Text<{
    fontSize: string,
    align?: string
}>`
    font-size: ${(props) => props.fontSize}px;
    text-align: ${(props) => props.align != null ? props.align : 'left'};
`