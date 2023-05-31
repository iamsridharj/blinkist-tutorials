import styled from "styled-components";
import { device } from "../../utils/cssBreakpoints";

export const BookListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
  background: whitesmoke;
  padding: 10px;
  @media ${device.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const BookDetailsContainer = styled.div`
  padding: 10px;

  @media ${device.desktop} {
    flex-basis: 400px;
  }
`;

export const BookCoverImage = styled.img`
  display: inline-flex;
  align-self: center;
  margin: 0px 10px;
  width: 70%;
  @media ${device.desktop} {
    width: 20%;
  }
`;
