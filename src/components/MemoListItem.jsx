import React from 'react';
import { View, Text } from 'react-native';

import tw from 'tailwind-rn';
import styled from '@emotion/native';

import { Feather } from '@expo/vector-icons';

const MemoListItem = styled.View`
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 19px;
  align-items: center;
  border-bottom-width: 1px;
  border-color: rgba(0, 0, 0, 0.15);
`;

export default function MemoList() {
  return [1, 2, 3, 5].map((el) => (
    <View key={el}>
      <MemoListItem>
        <View>
          <Text style={tw('text-base leading-8')}>買い物リスト</Text>
          <Text style={tw('text-xs leading-4')}>2020年12月24日</Text>
        </View>
        <View>
          <Feather name="x" size={16} color="#B0B0B0" />
        </View>
      </MemoListItem>
    </View>
  ));
}
