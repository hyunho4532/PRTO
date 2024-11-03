import styled from '@emotion/native'

export const Container = styled.View<{
    alignItems?: string,
    justifyContent?: string
}>`
    flex: 1;
    align-items: ${(props) => props.alignItems};
    justify-content: ${(props) => props.justifyContent};
`;