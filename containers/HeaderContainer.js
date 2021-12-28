import React from "react";
import Header from "../components/header";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const HeaderContainer = () => {
  const { data: session } = useSession();
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
          {!session ? (
            <Link href="/api/auth/signin" passHref>
              <Header.NavItem onClick={() => signIn("credentials")}>
                Sign In
              </Header.NavItem>
            </Link>
          ) : (
            <Link href="/api/auth/signout" passHref>
              <Header.NavItem onClick={() => signOut("credentials")}>
                Sign Out
              </Header.NavItem>
            </Link>
          )}
        </Header.NavList>
        <Header.HamburgerSpan></Header.HamburgerSpan>
      </Header.NavContent>
    </Header>
  );
};

export default HeaderContainer;
