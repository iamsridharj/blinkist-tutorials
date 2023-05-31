import React from "react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../Header/Header";
import { LayoutContent } from "./Layout.style";
import Button from "../Button/Button";
import Footer from "../Footer";
import { useAnalytics } from "../../hooks/useAnalytics";
import { useAbTest } from "../../hooks/useAbTest";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const variation = useAbTest();
  const analytics = useAnalytics();

  const handleSignUp = () => {
    analytics.trackUserEvent({ variation });
    navigate("/result");
  };
  return (
    <div>
      <Header />
      <LayoutContent>{children}</LayoutContent>
      <Footer>
        <Button onClick={handleSignUp}>Sign Up</Button>
      </Footer>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const renderLayout = (node: ReactNode) => <Layout>{node}</Layout>;

export default Layout;
