import styled from "@emotion/native";

/** 로딩바 애니메이션 */
export const ActivityIndicator = styled.ActivityIndicator<{
    marginTop?: string
}>`
    margin-top: ${(props) => props.marginTop}px;
`