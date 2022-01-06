import React from 'react';
// import { View, Text, ScrollView} from 'react-native';
import styled from '@emotion/native';
// import { string } from 'prop-types';

import CircleButton from '../components/CircleButton';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const MemoHeader = styled.View`
  background-color: #467FD3;
  height: 96px;
  justify-content: center;
  padding: 24px 19px;
`;

const MemoTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  line-height: 32px;
  font-weight: bold;
`;

const MemoDate = styled.Text`
  color: #fff;
  font-size: 12px;
  line-height:16px;
`;

const MemoBody = styled.ScrollView`
  padding: 32px 27px;
`;

const MemoText = styled.Text`
  font-size: 16px;
  line-height: 24px;
`;

export default function MemoDetailScreen(props) {
  const { navigation } = props;
  return (
    <Container>
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
          top: 60px;
          bottom: auto;
        `}
        name="edit-2"
        onPress={() => { navigation.navigate('MemoEdit'); }}
      />
    </Container>
  );
}
