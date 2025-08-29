import styled, { css } from 'styled-components';
import { MdMonitor, MdOutlineSettingsSuggest } from 'react-icons/md';
import { IoMdPaper, IoMdAnalytics } from 'react-icons/io';
import { RiAlarmWarningFill, RiLogoutCircleRFill } from 'react-icons/ri';

import logoImg from "../../../assets/logo.png"
import logoTitle from "../../../assets/logo_title.png"

const StyledHeader = styled.div`
  top: 0;
  width: 100%;
  height: 4.875rem;
  transition-duration: 0.6s;
  position: fixed;
  overflow-y: hidden;
  background-color: white;
  padding-left: 37px;
  padding-right: 37px;
  justify-content: left;
  box-sizing: border-box !important;
  border: 1px solid transparent;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: inline-flex;
  flex-direction: row;
  text-align: left !important;
  background-color: #343a40#495057;
  align-self: center;
  align-items: center;
`;

const Logo = styled.div`
    background-image: url(${logoImg});
    background-size: cover;
    width: 60px;
    height: 60px;
    line-height: 4.875rem;
    left: 20px;
    font-weight: 700;
    @media (max-width:650px){
        width: 90px;
        height: 40px;
    }
`;
const Title = styled.div`
    background-image: url(${logoTitle});
    background-size: cover;
    width: 420px;
    height: 40px;
    // text-align: left;
    font-size: 30px;
    font-weight: 700;
    line-height: 4.875rem;
    margin-left: 10px;
    @media (max-width:650px){
        font-size: 15px;
    }
    // a {
    //     text-decoration: none;
    //     color: #495057;
    //     align-self: center;
    //     align-items: center;      
    //     line-height: 4.875rem;
    // }
`;

const Header = () => (
    <StyledHeader>
        <Logo />
        <a href="/kfood">
            <Title />
        </a>
    </StyledHeader>
);

export default Header;