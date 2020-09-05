import styled from '@emotion/styled'

export const DotButton = styled.button` 
    outline:0;
    height: 13px;
    width: 13px;
    margin: 5px;
    background-color: ${props => props.contained ? props.theme.colors.primary : props.theme.colors.secondary};
    border-radius: 50%;
    display: inline-block;
`