import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--color-dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1em;
  color: var(--text-light);

  @media (min-width: 900px) {
    padding: 0.5em 2.5em 0.9em 2.5em;
    margin: 0 auto;
  }
`;

export const NavContent = styled.div`
  svg {
    z-index: 10;
    position: relative;
  }
`;

export const NavItem = styled.a`
  font-size: ${(props) => (props.type == "logo" ? "1.8rem" : "1.4rem")};
  font-weight: 700;
  color: ${(props) =>
    props.type == "logo" ? "var(--text-light)" : "var(--color-dark)"};
  letter-spacing: -0.03em;
  text-decoration: none;
  padding: 0.6em 0em;
  transition: all 0.1s ease-in-out 0.2s;

  @media (min-width: 850px) {
    color: var(--text-light);
    font-size: ${(props) => (props.type == "logo" ? "1.6rem" : "1.2rem")};
    margin-right: 2em;

    &:hover {
      color: rgba(255, 255, 255, 0.89);
      transform: scale(1.1);
    }
  }
`;

export const NavList = styled.nav`
  display: flex;

  @media (max-width: 850px) {
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    transform: translateX(0%);
    min-height: 90vh;
    z-index: 10;
    padding: 0em 2em;
    justify-content: center;
    align-items: center;
    background: var(--text-light);
    transition: all 0.2s ease-in 0.2s;
  }

  @media (min-width: 851px) {
    flex-direction: row;
    align-items: center;
  }

  span {
    margin: 0.7em 0em;
  }
`;

export const HamburgerSpan = styled.span`
  font-size: 2.1rem;
  cursor: pointer;

  @media (min-width: 851px) {
    display: none;

    svg {
      fill: ${({ fill }) => {
        fill;
      }};
    }
  }
`;
