import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
// eslint-disable-next-line
import styled, { css } from '@emotion/native';
import firebase from 'firebase';

import Button from '../components/Button';
import Loading from '../components/Loading';
import { translateErrors } from '../utils';

export default function LoginScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }],
        });
      } else {
        setIsLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  const handlePress = () => {
    setIsLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // .then((userCredential) => {
        // const { user } = userCredential;
        // console.log('🐈', user.uid);
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }],
        });
      })
      .catch((err) => {
        const errorMessage = translateErrors(err.code);
        Alert.alert(errorMessage.title, errorMessage.description);
      })
      .then(() => {
        setIsLoading(false);
      });
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Inner>
        <Title>Log In</Title>
        <Input
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          placeholder="Email Address"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <Input
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry
          textContentType="password"
        />
        <Button label="Submit" onPress={handlePress} />
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
