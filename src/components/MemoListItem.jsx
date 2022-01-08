import React from 'react';
import { View, Text, Alert, FlatList } from 'react-native';
import { string, shape, instanceOf, arrayOf } from 'prop-types';

import tw from 'tailwind-rn';
import styled from '@emotion/native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';

import { dateToString } from '../utils';

export default function MemoList(props) {
  const navigation = useNavigation();
  const { memos } = props;

  const deleteMemo = (id) => {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      Alert.alert('メモを削除します', 'よろしいですか？', [
        { text: 'キャンセル', onPress: () => {} },
        {
          text: '削除する',
          style: 'destructive',
          onPress: () => {
            ref.delete().catch(() => {
              Alert.alert('削除に失敗しました');
            });
          },
        },
      ]);
    }
  };

  const renderItem = ({ item }) => (
    <Container key={item.id}>
      <MemoListItem
        onPress={() => {
          navigation.navigate('MemoDetail', { id: item.id });
        }}
      >
        <MemoInner>
          <Text style={tw('text-base leading-8')} numberOfLines={1}>
            {item.bodyText}
          </Text>
          <Text style={tw('text-xs leading-4')}>
            {dateToString(item.updatedAt)}
          </Text>
        </MemoInner>
        <IconContainer
          onPress={() => {
            deleteMemo(item.id);
          }}
        >
          <Feather name="x" size={16} color="#B0B0B0" />
        </IconContainer>
      </MemoListItem>
    </Container>
  );
  return (
    <View>
      <FlatList
        data={memos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

MemoList.propTypes = {
  memos: arrayOf(
    shape({
      id: string,
      bodyText: string,
      updatedAt: instanceOf(Date),
    })
  ).isRequired,
};

const Container = styled.View`
  flex: 1;
`;

const MemoListItem = styled.TouchableOpacity`
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 19px;
  align-items: center;
  border-bottom-width: 1px;
  border-color: rgba(0, 0, 0, 0.15);
`;

const MemoInner = styled.View`
  flex: 1;
`;

const IconContainer = styled.TouchableOpacity`
  padding: 8px;
`;
