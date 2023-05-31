import styled from "styled-components";
import { device } from "../../utils/cssBreakpoints";

export const LayoutContent = styled.div`
  margin: auto;
  padding-bottom: 10%;
  @media ${device.desktop} {
    width: 60%;
  }
`;
