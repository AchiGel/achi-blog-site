import styled from "styled-components";
import { NavItems, NavList } from "./Header";
import { Link } from "react-router-dom";

const FooterLayout = styled.footer`
  padding: 30px 32px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Footer() {
  return (
    <FooterLayout>
      <NavList>
        <NavItems>
          <Link to="/">Blog</Link>
        </NavItems>
        <NavItems>
          <Link to="/projects">Projects</Link>
        </NavItems>
        <NavItems>
          <Link to="/about">About</Link>
        </NavItems>
        <NavItems>
          <Link to="/newsletter">Newsletter</Link>
        </NavItems>
      </NavList>
    </FooterLayout>
  );
}
