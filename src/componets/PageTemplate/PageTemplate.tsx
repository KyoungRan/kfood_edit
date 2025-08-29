// import React from "react";
// import styled, { css } from "styled-components";
// import Header from "../../componets/common/Header";
// import Footer from "../../componets/common/Footer"; // 필요시 추가

// // ====== Responsive Mixin ======
// const responsive = css`
//   margin: 0 auto;
//   width: 1200px;
//   transition: width 0.3s ease-in-out;

//   @media (max-width: 1440px) {
//     width: 1024px;
//   }
//   @media (max-width: 1024px) {
//     width: 100%;
//   }
// `;

// // ====== Styled Components ======
// const PageWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh; /* footer를 아래로 밀기 위해 */
// `;

// const StyledHeader = styled(Header)`
//   width: 100%;
//   top: 0;
//   left: 0;
//   z-index: 50;
// `;

// const Main = styled.main<{ padding?: boolean; responsive?: boolean }>`
//   order: 1;
//   display: flex;
//   flex-flow: row wrap;
//   flex: 1; /* footer를 아래로 밀어내는 역할 */

//   ${({ padding }) =>
//     padding &&
//     css`
//       padding-top: 4.875rem;
//       padding-bottom: 3.5rem;
//     `}
//   ${({ responsive }) => responsive && responsive}
// `;

// // // Footer는 필요할 경우 styled로 별도 작성
// const StyledFooter = styled(Footer)`
//   margin-top: auto;
// `;

// type PageTemplateProps = {
//   children: React.ReactNode;
//   responsive?: boolean;
//   padding?: boolean;
//   sidebarFooter?: boolean;
// };

// const PageTemplate: React.FC<PageTemplateProps> = ({
//   children,
//   responsive,
//   padding,
// }) => {
//   return (
//     <PageWrapper>
//       <StyledHeader />
//       <Main padding={padding} responsive={responsive}>
//         {children}
//       </Main>
//       {/* footer를 쓰려면 활성화 */}
//       <StyledFooter />
//     </PageWrapper>
//   );
// };

// export default PageTemplate;
import React from "react";
import styled, { css } from "styled-components";
import Header from "../common/Header";
import Footer from "../common/Footer";

// ====== Responsive Mixin ======
const responsive = css`
  margin: 0 auto;
  width: 1200px;
  transition: width 0.3s ease-in-out;

  @media (max-width: 1440px) {
    width: 1024px;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

// ====== Styled Components ======
const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* footer를 아래로 밀기 위해 */
`;

const StyledHeader = styled(Header)`
  width: 100%;
  top: 0;
  left: 0;
  z-index: 50;
`;

const Main = styled.main<{ padding?: boolean; responsive?: boolean }>`
  order: 1;
  display: flex;
  flex-flow: row wrap;
  flex: 1;

  ${({ padding }) =>
    padding &&
    css`
      padding-top: 4.875rem;
      padding-bottom: 3.5rem;
    `}
  ${({ responsive }) => responsive && responsive}
`;

// Footer는 필요할 경우 styled로 별도 작성
const StyledFooter = styled(Footer)`
  margin-top: auto;
  width: 100%;
`;

type PageTemplateProps = {
  children: React.ReactNode;
  responsive?: boolean;
  padding?: boolean;
  sidebarFooter?: boolean;
};

const PageTemplate: React.FC<PageTemplateProps> = ({
  children,
  responsive,
  padding,
}) => {
  return (
    <PageWrapper>
      <StyledHeader />
      <Main padding={padding} responsive={responsive}>
        {children}
      </Main>
      <StyledFooter />
    </PageWrapper>
  );
};

export default PageTemplate;
