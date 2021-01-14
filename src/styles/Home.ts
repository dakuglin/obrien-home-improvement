import styled, { css } from "styled-components";

export interface Props {
  left: boolean;
}

export const Wrapper = styled.div<Props>`
  height: 100%;
  position: fixed;
  z-index: 1;
  overflow-x: hidden; 
  ${props => props.left ? css`
    left: 0;
    background: url("https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
    width: 60%;
    ` : css`
  `}
`;
