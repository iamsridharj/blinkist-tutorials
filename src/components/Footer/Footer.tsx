import { ReactNode } from "react";
import { FooterWrapper } from "./Footer.styles";

type FooterProps = {
  children: ReactNode;
};

const Footer: React.FC<FooterProps> = ({ children }) => {
  return <FooterWrapper>{children}</FooterWrapper>;
};

export default Footer;
