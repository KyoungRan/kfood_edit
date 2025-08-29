import { useState, useRef, ReactNode } from 'react';
import styled, { css } from 'styled-components';

const StyledFooter = styled.footer`
  order: 2;
  flex: 0 1 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #ffffff;
  color: #868e96;
  width: 100%;
  height: 7rem;
  display: block;
  padding-top: 35px;
  z-index: 100;
  text-align: right;
  box-shadow: 7px 0 5px 0 rgba(0, 0, 0, 0.4);
  bottom: 0;

  .footer-content {
    width: 80%;
    margin: auto;
    padding-bottom: 30px;
    .line {
      border-top: solid 1px #868e96;
    }

    p {
      margin: 0;
      padding: 0;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-content">
        <hr className="line" />
        <p>Copyright © 2025 POTENUP AI AGENT 강경란 박종욱 이재진. All rights reserved.</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;

