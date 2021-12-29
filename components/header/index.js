import React, { useEffect, useState, useContext, createContext } from "react";
import {
  Container,
  NavContent,
  NavList,
  NavItem,
  HamburgerSpan,
} from "../header/styles/header";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegWindowClose } from "react-icons/fa";

const ToggleContext = createContext();

export default function Header({ children, ...restProps }) {
  const [toggleState, setToggleState] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 800) {
      setToggleState(false);
    }

    if (window.innerWidth > 800) {
      setToggleState(true);
    }

    const handleSize = () => {
      if (window.innerWidth > 800) {
        setToggleState(true);
      }
      if (window.innerWidth < 800) {
        setToggleState(false);
      }
    };

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <ToggleContext.Provider
      value={{
        toggleState,
        setToggleState,
      }}
    >
      <Container {...restProps}>{children}</Container>
    </ToggleContext.Provider>
  );
}

Header.NavContent = function HeaderNavContent({ children, ...restProps }) {
  return <NavContent {...restProps}>{children}</NavContent>;
};

Header.NavList = function HeaderNavList({ children, ...restProps }) {
  const { toggleState } = useContext(ToggleContext);
  return toggleState ? <NavList {...restProps}>{children}</NavList> : null;
};

Header.HamburgerSpan = function HeaderHamburgerSpan({
  children,
  ...restProps
}) {
  const { setToggleState, toggleState } = useContext(ToggleContext);

  return (
    <HamburgerSpan {...restProps}>
      {toggleState ? (
        <FaRegWindowClose
          fill="var(--color-dark)"
          onClick={() => {
            setToggleState(false);
          }}
        />
      ) : (
        <GiHamburgerMenu
          fill="white"
          onClick={() => {
            setToggleState(true);
          }}
        />
      )}
    </HamburgerSpan>
  );
};

Header.NavItem = React.forwardRef(function HeaderNavItem(
  { children, ...restProps },
  ref
) {
  const { setToggleState } = useContext(ToggleContext);
  return (
    <NavItem {...restProps} onClick={() => setToggleState(false)}>
      {children}
    </NavItem>
  );
});
