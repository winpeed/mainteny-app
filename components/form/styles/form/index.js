import styled from "styled-components";

export const Container = styled.form`
  flex-direction: row;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 1em;
  flex: 0 0 32%;
  flex-wrap: wrap;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  padding: 0.8em 2em;
  border-radius: 2px;
  border: 1px solid var(--color-gray);
  margin-bottom: 1em;
  color: var(--color-gray);
  background: var(--text-light);
  font-weight: 600;
  letter-spacing: 0.02em;
  margin-left: 1em;

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
  background: ${(props) =>
    props.state == "danger"
      ? "var(--color-red)"
      : props.state == "success"
      ? "var(--color-green)"
      : "var(--color-dark)"};
  color: var(--text-light);
  border-radius: 4px;
  border: 1px solid var(--color-gray);
  cursor: pointer;
  font-weight: 600;
  font-size: 0.8rem;
  margin: 1em 0em;
  display: inline-block;
  text-align: center;

  @media (min-width: 510px) {
    padding: 1em 1.5em;
  }
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 0.95rem;
  color: ${(props) =>
    props.type == "label" ? "var(--text-dark)" : "var(--color-dark)"};
  padding: 0.5em 0em;
`;

export const Text = styled.p`
  color: ${(props) =>
    props.color == "light"
      ? "var(--color-light)"
      : props.color == "blue"
      ? "var(--color-blue)"
      : "var(--text-dark)"};
  font-size: ${(props) => (props.color == "blue" ? " 1.1em" : " 0.9rem")};
;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.3;
  margin: 0.7em 0em;
  padding-right: 0.9em;
  opacity: 0.9;
  cursor: pointer;
  text-decoration:color: ${(props) =>
    props.color == "blue" ? "none" : "underline"};

  @media (min-width: 1000px) {
    font-size: 1rem;
  }
`;
