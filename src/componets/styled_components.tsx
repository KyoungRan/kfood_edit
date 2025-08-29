import styled from "styled-components";

export const BackImage = styled.div<{$path:string}>`
    &::before{
        position: fixed;
        content: '';    
        // position: absolute;
        top: 85px;
        left: 0;
        width: 100vw;
        // height: 100vh;
        height: calc(100vh - 85px) !important;
        background-image: ${props => `url(${props.$path})`};
        background-repeat: repeat;
        background-size: auto;
        background-position: center;
        opacity: 0.7; 
        z-index: -1;
    }
`;
export const Svg = styled.svg<{$size:number}>`
    width: ${props => `${props.$size}px`};
    height: ${props => `${props.$size}px`};
`;
