import React from 'react';
import {
  View, Text, Alert,
} from 'react-native';

import tw from 'tailwind-rn';
import styled from '@emotion/native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MemoListItem = styled.TouchableOpacity`
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 19px;
  align-items: center;
  border-bottom-width: 1px;
  border-color: rgba(0, 0, 0, 0.15);
`;

const IconContainer = styled.TouchableOpacity`
  padding: 8px
`;

export default function MemoList() {
  const navigation = useNavigation();
  return [1, 2, 3, 5].map((el) => (
    <View key={el}>
      <MemoListItem onPress={() => { navigation.navigate('MemoDetail'); }}>
        <View>
          <Text style={tw('text-base leading-8')}>買い物リスト</Text>
          <Text style={tw('text-xs leading-4')}>2020年12月24日</Text>
        </View>
        <IconContainer onPress={() => { Alert.alert('Are you sure?'); }}>
          <Feather name="x" size={16} color="#B0B0B0" />
        </IconContainer>
      </MemoListItem>
    </View>
  ));
}
