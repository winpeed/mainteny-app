import React from "react";
import {
  Container,
  Content,
  Card,
  PageTitle,
  SubTitle,
  Input,
  Button,
  ButtonLink,
  Name,
  ImageWrapper,
  Wrapper,
  Text,
  Row,
  Overall,
  Span,
  ContentWrap,
} from "../profile/styles/profile";

export default function Profile({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Profile.Content = function ProfileContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Profile.Card = function ProfileCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

Profile.Overall = function ProfileOverall({ children, ...restProps }) {
  return <Overall {...restProps}>{children}</Overall>;
};

Profile.PageTitle = function ProfilePageTitle({ children, ...restProps }) {
  return <PageTitle {...restProps}>{children}</PageTitle>;
};

Profile.SubTitle = function ProfileSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Profile.Input = function ProfileInput({ ...restProps }) {
  return <Input {...restProps} />;
};

Profile.Button = function ProfileButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Profile.Name = function ProfileName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

Profile.ImageWrapper = function ProfileImageWrapper({
  children,
  ...restProps
}) {
  return <ImageWrapper {...restProps}>{children}</ImageWrapper>;
};

Profile.Wrapper = function ProfileWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Profile.Text = function ProfileText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Profile.Row = function ProfileRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Profile.Span = function ProfileSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};

Profile.ContentWrap = function ProfileContentWrap({ children, ...restProps }) {
  return <ContentWrap {...restProps}>{children}</ContentWrap>;
};

Profile.ButtonLink = function ProfileButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
