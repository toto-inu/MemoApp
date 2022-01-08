import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
// import { View } from 'react-native';
import styled from '@emotion/native';
import firebase from 'firebase';

import MemoList from '../components/MemoListItem';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';
import Button from '../components/Button';
import Loading from '../components/Loading';

export default function MemoListScreen(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      setIsLoading(true);
      const ref = db
        .collection(`users/${currentUser.uid}/memos`)
        .orderBy('updatedAt', 'desc');
      unsubscribe = ref.onSnapshot(
        (snapshot) => {
          const userMemos = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            userMemos.push({
              id: doc.id,
              bodyText: data.bodyText,
              updatedAt: data.updatedAt.toDate(),
            });
          });
          setMemos(userMemos);
          setIsLoading(false);
        },
        () => {
          setIsLoading(false);
          Alert.alert('データの読み込みに失敗しました。');
        }
      );
    }
    return () => unsubscribe;
  }, []);

  if (memos.length === 0) {
    return (
      <EmptyContainer>
        <Loading isLoading={isLoading} />
        <EmptyInner>
          <EmptyTitle>最初のメモを作成しよう！</EmptyTitle>
          <Button
            label="作成する"
            onPress={() => {
              navigation.navigate('MemoCreate');
            }}
            style={`
              align-self: center;
            `}
          />
        </EmptyInner>
      </EmptyContainer>
    );
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <MemoList memos={memos} />
      <CircleButton
        name="plus"
        onPress={() => {
          navigation.navigate('MemoCreate');
        }}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #f0f4f8;
`;

const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const EmptyInner = styled.View`
  justify-content: center;
  align-items: center;
`;

const EmptyTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 24px;
`;
