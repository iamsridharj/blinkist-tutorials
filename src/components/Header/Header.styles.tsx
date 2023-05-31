import styled from "styled-components";
import { SmallTextBold } from "../Typography/Typography.styles";

export const HeaderLogo = styled.img`
  width: 10%;
  padding: 0px 15px;
  cursor: pointer;
`;

export const HeaderWrapper = styled.div`
  border-bottom: 2px solid #e5e5e5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FeatureToggleWrapper = styled(SmallTextBold)`
  line-height: 5rem;
  text-decoration: underline;
  cursor: pointer;
`;
