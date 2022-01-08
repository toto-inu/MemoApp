import React from 'react';
import { Alert } from 'react-native';

import styled from '@emotion/native';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';

export default function LogOutButton() {
  const navigation = useNavigation();
  const handlePress = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      })
      .catch(() => {
        Alert.alert('ログアウトに失敗しました');
      });
  };

  return (
    <Container onPress={handlePress}>
      <Label>ログアウト</Label>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  padding: 4px 12px;
`;

const Label = styled.Text`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
`;
