import React, { useState } from "react";
import Header from "../components/header";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import SignOut from "../components/SignOut";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Profile from "../components/profile";
import { useRouter } from "next/router";

const HeaderContainer = ({ status }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const router = useRouter();

  function handleSignIn() {
    router.push("/signin");
  }

  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          overlay: "customOverlay",
        }}
        aria-labelledby="Sign Out Modal"
        aria-describedby="A modal option for signing out"
      >
        <SignOut onClose={onCloseModal} />
      </Modal>
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
            {status === "loading" || status === "unauthenticated" ? (
              <Profile.Button onClick={handleSignIn} state="success">
                Sign In
              </Profile.Button>
            ) : (
              <Profile.Button onClick={onOpenModal} state="danger">
                Sign Out
              </Profile.Button>
            )}
          </Header.NavList>
          <Header.HamburgerSpan></Header.HamburgerSpan>
        </Header.NavContent>
      </Header>
    </>
  );
};

export default HeaderContainer;
