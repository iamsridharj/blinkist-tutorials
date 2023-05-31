import { useNavigate } from "react-router-dom";
import BlinkistHeaderLogo from "../../assets/images/blinkist-header-logo.png";

import {
  FeatureToggleWrapper,
  HeaderLogo,
  HeaderWrapper,
} from "./Header.styles";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderWrapper>
        {" "}
        <HeaderLogo
          src={BlinkistHeaderLogo}
          onClick={() => navigate("/")}
        />{" "}
        <FeatureToggleWrapper onClick={() => navigate("/feature-toggles")}>
          Feature toggles
        </FeatureToggleWrapper>
      </HeaderWrapper>
    </>
  );
};

export default Header;
