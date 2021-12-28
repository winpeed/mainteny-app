import React from "react";
import Header from "../components/header";
import Link from "next/link";

const HeaderContainer = () => {
  return (
    <Header>
      <Link href="/" passHref>
        <Header.NavItem type="logo" className="logo">
          Mainteny Uni
        </Header.NavItem>
      </Link>

      <Header.NavContent>
        <Header.NavList>
          <Link href="/" passHref>
            <Header.NavItem>Home</Header.NavItem>
          </Link>
          <Link href="/signin" passHref>
            <Header.NavItem>Admin sign-in</Header.NavItem>
          </Link>
        </Header.NavList>
        <Header.HamburgerSpan></Header.HamburgerSpan>
      </Header.NavContent>
    </Header>
  );
};

export default HeaderContainer;
