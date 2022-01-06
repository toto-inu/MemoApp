import React from 'react';
// import { View, Text, ScrollView} from 'react-native';
import styled from '@emotion/native';
// import { string } from 'prop-types';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const MemoHeader = styled.View`
  background-color: #467FD3;
  height: 96;
  justify-content: center;
  padding: 24px 19px;
`;

const MemoTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  line-height: 32;
  font-weight: bold;
`;

const MemoDate = styled.Text`
  color: #fff;
  font-size: 12px;
  line-height:16;
`;

const MemoBody = styled.ScrollView`
  padding: 32px 27px;
`;

const MemoText = styled.Text`
  font-size: 16px;
  line-height: 24;
`;

export default function MemoDetailScreen() {
  return (
    <Container>
      <AppBar />
      <MemoHeader>
        <MemoTitle>買い物リスト</MemoTitle>
        <MemoDate>2020年12月24日 10:00</MemoDate>
      </MemoHeader>
      <MemoBody>
        <MemoText>
          買い物リスト
          書体やレイアウトなどを確認するために用います。
          本文用なので使い方を間違えると不自然に見えることもあります。
        </MemoText>
      </MemoBody>
      <CircleButton
        style={`
          top: 160px;
          bottom: auto;
        `}
        name="edit-2"
      />
    </Container>
  );
}
