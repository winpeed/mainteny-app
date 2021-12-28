import React from "react";
import { Container, Text, Wrapper, Input, Label, Button } from "../form/styles";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Wrapper = function FormWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.Input = function FormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

Form.Button = React.forwardRef(function FormButton(
  { children, ...restProps },
  ref
) {
  return (
    <Button ref={ref} {...restProps}>
      {children}
    </Button>
  );
});

Form.Label = function FormLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};
