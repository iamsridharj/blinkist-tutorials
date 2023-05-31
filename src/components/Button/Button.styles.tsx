import styled from "styled-components";

export const ButtonWrapper = styled.button`
  background-color: #2ce080;
  border: #2ce080 0.125rem solid;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  color: #03314b;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18.5rem;
  padding: 0.6875rem 1rem 0.8125rem;
  cursor: pointer;

  &:active {
    background-color: #2ad77b;
  }
`;
