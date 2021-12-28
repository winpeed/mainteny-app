import styled from "styled-components";

export const Container = styled.main`
  @media (min-width: 790px) {
    display: flex;
    min-height: 100vh;
  }
`;

export const Section = styled.section`
  padding: 1em;
  background: ${(props) =>
    props.styled === "true" ? "var(--text-dark)" : "var(--text-light)"};

  @media (min-width: 790px) {
    display: flex;
    flex-direction: column;
    flex: ${(props) => (props.styled === "true" ? "0 0 40%" : "0 0 60%")};
    justify-content: center;
    max-width: ${(props) => (props.styled === "true" ? "70%" : "83%")};
    padding: 0em 2em 0em 6em;
  }

  @media (min-width: 1200px) {
    padding: ${(props) =>
      props.styled === "true" ? "0em 8em" : "0 4em 0em 8em"};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "row"
      ? "row"
      : props.direction === "start"
      ? "row"
      : "column"};
  justify-content: ${(props) =>
    props.direction === "row"
      ? "space-between"
      : props.direction === "start"
      ? "flex-start"
      : null};
  max-width: ${(props) => (props.width === "max" ? "350px" : null)};

  @media (min-width: 510px) {
    max-width: ${(props) => (props.width === "max" ? "inherit" : null)};
  }
`;

export const Heading = styled.h1`
  font-size: 1.8rem;
  color: var(--text-dark);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.015em;
  margin: 0.7em 2em 0.3em 0em;
  font-family: var(--head-text);

  @media (min-width: 510px) {
    font-size: 2rem;
    margin: 0.7em 1em 0.3em 0em;
    max-width: 85%;
  }

  @media (min-width: 1000px) {
    font-size: 2.3rem;
  }
`;

export const Text = styled.p`
  color: ${(props) =>
    props.color == "light" ? "var(--color-light)" : "var(--color-gray)"};
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.3;
  margin: 0.7em 0em;
  padding-right: 0.9em;
  opacity: 0.8;

  @media (min-width: 1000px) {
    font-size: 1.05rem;
  }
`;

export const SubHeading = styled.h2`
  font-size: 1.2rem;
  letter-spacing: -0.01em;
  line-height: 1.4;
  color: ${(props) =>
    props.color == "light" ? "var(--color-light)" : "var(--color-dark)"};

  @media (min-width: 510px) {
    font-size: 1.3rem;
    margin: 0.7em 0.9em 0.3em 0em;
  }

  @media (min-width: 910px) {
    font-size: 1.5rem;
    margin: 0.7em 1.1em 0.3em 0em;
  }
`;

export const TestHeading = styled.h3`
  padding: 0em;
  margin: 0em;
  font-size: 1rem;
  color: ${(props) =>
    props.color == "light" ? "var(--text-light)" : "var(--color-gray)"};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 350px;

  @media (min-width: 510px) {
    max-width: 70%;
  }
`;

export const Input = styled.input`
  padding: 1em 2em;
  border-radius: 4px;
  border: 1px solid var(--color-gray);
  margin-bottom: 1em;
  color: var(--color-gray);
  background: var(--text-light);
  font-weight: 600;
  opacity: 0.5;
  letter-spacing: -0.05em;

  &:focus {
    background: var(--text-light);
    color: var(--text-dark);
    opacity: 1;
    border: 1px solid var(--color-gray);
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 1em 2em;
  background: var(--text-dark);
  color: var(--text-light);
  border-radius: 4px;
  border: 1px solid var(--color-gray);
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.9em;
  text-align: center;

  @media (min-width: 510px) {
    padding: 1em 1.5em;
  }

  &:disabled {
    background: var(--color-gray);
  }
`;

export const Label = styled(Text)`
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--color-gray);
  opacity: 0.85;
`;

export const Link = styled.a`
  color: ${(props) =>
    props.mode === "url" ? "var(--color-blue)" : "var(--color-gray)"};
  text-decoration: none;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  font-size: 0.95rem;
  align-items: center;
  opacity: ${(props) => (props.mode === "url" ? "1.0" : "0.8")};
`;

export const ImageWrapper = styled.div``;
