
import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

export const MaterialIconsWrapper = styled.div<{ className?: string }>`
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';

  position: relative;
  vertical-align: middle;

  color: #000000;
  margin: 0;
`;

interface MaterialIconsProps {
  children: ReactNode;
  className?: string;
}

const MaterialIcons = ({ children, className }: MaterialIconsProps) => {
  return (
    <MaterialIconsWrapper className={className}>
      {children}
    </MaterialIconsWrapper>
  );
};

export default MaterialIcons;