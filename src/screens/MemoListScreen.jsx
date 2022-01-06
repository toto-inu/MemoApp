import React from 'react';
// import { View } from 'react-native';
import styled from '@emotion/native';

import MemoList from '../components/MemoListItem';
import CircleButton from '../components/CircleButton';

const Container = styled.View`
  flex: 1;
  background-color: #F0F4F8;
`;

export default function MemoListScreen(props) {
  const { navigation } = props;
  return (
    <Container>
      <MemoList />
      <CircleButton name="plus" onPress={() => { navigation.navigate('MemoCreate'); }} />
    </Container>
  );
}
