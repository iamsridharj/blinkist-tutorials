import styled from "styled-components";

export const MainHeader = styled.h1`
  font-size: 1.5rem;
  line-height: 2.5rem;
  font-weight: 700;
  font-family: "PT Sans", sans-serif;
  margin-top: 10px;
`;

export const BodyText = styled.h1`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: normal;
  font-family: "PT Sans", sans-serif;
`;

export const SubHeader = styled.h1`
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 700;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

export const SmallTextBold = styled.h1`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 700;
  font-family: "PT Sans", sans-serif;

  &.success {
    background-color: #2ad77b;
    padding: 10px;
    color: white;
  }
`;
