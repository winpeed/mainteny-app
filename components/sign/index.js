import React from "react";
import {
  Container,
  Section,
  Wrapper,
  Heading,
  SubHeading,
  TestHeading,
  Form,
  Input,
  Button,
  ButtonInput,
  Link,
  Text,
  Label,
  ImageWrapper,
} from "../sign/styles/sign";

export default function Sign({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Sign.Section = function SignSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};

Sign.Wrapper = function SignWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Sign.Heading = function SignHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};

Sign.SubHeading = function SignSubHeading({ children, ...restProps }) {
  return <SubHeading {...restProps}>{children}</SubHeading>;
};

Sign.TestHeading = function SignTestHeading({ children, ...restProps }) {
  return <TestHeading {...restProps}>{children}</TestHeading>;
};

Sign.Form = function SignForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
};

Sign.Input = function SignInput({ ...restProps }) {
  return <Input {...restProps} />;
};

Sign.Button = function SignButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Sign.Text = function SignText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Sign.Label = function SignLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};

Sign.ImageWrapper = function SignImageWrapper({ children, ...restProps }) {
  return <ImageWrapper {...restProps}>{children}</ImageWrapper>;
};

Sign.Link = React.forwardRef(function SignLink(
  { children, ...restProps },
  ref
) {
  return (
    <Link ref={ref} {...restProps}>
      {children}
    </Link>
  );
});

Sign.ButtonInput = function SignButtonInput({ children, ...restProps }) {
  return <ButtonInput {...restProps}>{children}</ButtonInput>;
};
