import styled from '@emotion/native'

export const Container = styled.View<{
    width?: string,
    height?: string,
    alignItems?: string,
    justifyContent?: string,
    flex?: string,
    auto?: string,
    borderRadius?: string,
    color?: string,
    marginTop?: string
}>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    flex: ${(props) => props.flex};
    align-items: ${(props) => props.alignItems};
    justify-content: ${(props) => props.justifyContent};
    display: ${(props) => props.flex};
    margin: ${(props) => props.auto != null ? '0 auto' : ''};
    border-radius: ${(props) => props.borderRadius}px;
    background-color: ${(props) => props.color};
    margin-top: ${(props) => props.marginTop}px;
`;