import React, { useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from "react-native";
// eslint-disable-next-line
import styled, { css } from "@emotion/native";

import Button from '../components/Button';

const Container = styled.View`
  flex: 1;
  background-color: #f0f4f8;
`;

const Inner = styled.View`
  padding: 24px 27px;
`;

const Title = styled.Text`
  font-size: 24px;
  line-height: 32px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const Input = styled.TextInput`
  font-size: 16px;
  height: 48px;
  border-color: #ddd;
  border-width: 1px;
  background-color: #fff;
  padding: 0 8px;
  margin-bottom: 16px;
`;

const FooterText = styled.Text`
  font-size: 14px;
  line-height: 24px;
  margin-right: 8px;
`;

const FooterLink = styled.Text`
  font-size: 14px;
  line-height: 24px;
  color: #467fd3;
`;

const FooterContainer = styled.View`
  flex-direction: row;
`;

export default function LoginScreen(props) {
  const { navigation } = props;
  useEffect(() => {
    console.log('🐕とといぬがとおりますよーっと');
  }, []);
  return (
    <Container>
      <Inner>
        <Title>Log In</Title>
        <Input value="Email Address" />
        <Input value="Password" />
        <Button
          label="Submit"
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'MemoList' }],
            });
          }}
        />
        <FooterContainer>
          <FooterText>Not registered?</FooterText>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'SignUp' }],
              });
            }}
          >
            <FooterLink>Sign up here!</FooterLink>
          </TouchableOpacity>
        </FooterContainer>
      </Inner>
    </Container>
  );
}
