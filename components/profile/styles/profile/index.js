import styled from "styled-components";

export const Container = styled.main`
  margin: ${(props) => (props.type == "content" ? "0em" : "1em 0.6em")};
  display: ${(props) => (props.type == "content" ? "flex" : null)};
`;

export const Content = styled.section`
  flex: ${(props) => (props.type == "left" ? "0 0 30%" : "0 0 65%")};
  padding: 1em 2em 3em 2em;
  min-height: 100vh;
  border-right: ${(props) =>
    props.type == "left" ? "1px solid var(--light-gray)" : null};
  margin: ${(props) => (props.type == "left" ? null : "0em 0em 0em 2em")};
  background: ${(props) =>
    props.type == "left" ? "var(--color-mocassin)" : null};

  @media (max-width: 1100px) {
    flex: ${(props) => (props.type == "left" ? "0 0 30%" : "0 0 100%")};
    display: ${(props) => (props.type == "left" ? "none" : null)};
    margin: ${(props) => (props.type == "left" ? null : "0em")};
  }
`;

export const Card = styled.section`
  margin: 0em auto;
  padding: 1em;
  max-width: 400px;
  border: 1px solid var(--light-gray);
  border-radius: 5px;
  background: var(--color-mocassin);

  @media (min-width: 600px) {
    max-width: 900px;
    display: flex;
    align-items: center;
    padding: 1em 2.5em;
  }
`;

export const PageTitle = styled.h1`
  font-size: 1.8rem;
  text-align: center;
  color: var(--text-dark);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.015em;
  margin: 0.7em 2em 0.3em 0em;

  @media (min-width: 510px) {
    font-size: 2rem;
    margin: 0em 1em 0.5em 0em;
    max-width: 85%;
  }

  @media (min-width: 1100px) {
    font-size: 2.3rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.6rem;
  color: var(--color-dark);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.015em;
  text-align: ${(props) => (props.type = "user" ? "center" : null)};
`;

export const Input = styled.input`
  padding: 1em 2em;
  border-radius: 4px;
  border: 1px solid var(--color-gray);
  margin-bottom: 1em;
  color: var(--color-gray);
  background: var(--text-light);
  font-weight: 600;
  opacity: 0.8;
  letter-spacing: 0.02em;

  &:focus {
    background: var(--text-light);
    color: var(--text-dark);
    opacity: 1;
    border: 1px solid var(--color-gray);
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 1em 1.3em;
  background: ${(props) =>
    props.state == "danger"
      ? "var(--color-red)"
      : props.state == "success"
      ? "var(--color-green)"
      : "var(--color-dark)"};
  color: var(--text-light);
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.9em;
  text-align: center;
  display: flex;
  align-items: center;

  @media (min-width: 510px) {
    padding: 1em 1.5em;
  }
`;

export const Name = styled.h3`
  padding: 0em;
  margin: 0em;
  font-size: 1rem;
  color: ${(props) =>
    props.color == "light" ? "var(--text-light)" : "var(--text-dark)"};

  @media (min-width: 700px) {
    font-size: 1.2rem;
  }
`;

export const ImageWrapper = styled.div`
  padding: 2em 0em 1.4em 0em;
  margin: 0;
  display: flex;
  justify-content: ${(props) =>
    props.justify == "center" ? "center" : "space-between"};

  @media (min-width: 600px) {
    flex: 0 0 30%;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.6em 0em;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: ${(props) => (props.align === "center" ? "2em" : "0em")};
  text-align: ${(props) => (props.align === "center" ? "center" : null)};
  flex-direction: ${(props) =>
    props.direction === "row"
      ? "row"
      : props.direction === "start"
      ? "row"
      : "column"};
  justify-content: ${(props) =>
    props.type === "home" ? "space-evenly" : "flex - start"};
  align-self: flex-start;
  flex: 0 0 46%;
  flex-wrap: wrap;
  min-height: ${(props) => (props.type === "home" ? "50vh" : null)};
  align-items: ${(props) => (props.type === "home" ? "center" : null)};
`;

export const Overall = styled.div`
  @media (min-width: 600px) {
    flex: 0 0 70%;
    padding: 0em 1em;
    margin-left: 1.5em;
  }

  @media (min-width: 800px) {
    margin-left: 2.3em;
  }
`;

export const Text = styled.p`
  color: ${(props) =>
    props.color == "light" ? "var(--color-light)" : "var(--color-gray)"};
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.3;
  margin: 0.7em 0em;
  padding-right: 0.9em;
  opacity: 0.8;
  color: ${(props) => (props.align == "center" ? "center" : null)};

  @media (min-width: 1000px) {
    font-size: 1rem;
  }
`;

export const Span = styled.span`
  background: var(--color-dark);
  color: var(--text-light);
  font-size: 0.7rem;
  margin: 0.3em 0.3em;
  font-weight: 600;
  padding: 0.3em 0.8em;
  border-radius: 9px;
  display: inline-block;
  max-width: inherit;
`;

export const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
