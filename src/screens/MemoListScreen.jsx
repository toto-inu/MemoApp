import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
// import { View } from 'react-native';
import styled from '@emotion/native';
import firebase from 'firebase';

import MemoList from '../components/MemoListItem';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);

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
      const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'desc');
      unsubscribe = ref.onSnapshot((snapshot) => {
        const userMemos = [];
        snapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
          const data = doc.data();
          userMemos.push({
            id: doc.id,
            bodyText: data.bodyText,
            updatedAt: data.updatedAt.toDate(),
          });
        });
        setMemos(userMemos);
      }, (error) => {
        console.log('👹', error);
        Alert.alert('データの読み込みに失敗しました。');
      });
    }
    return () => unsubscribe;
  }, []);

  return (
    <Container>
      <MemoList memos={memos} />
      <CircleButton name="plus" onPress={() => { navigation.navigate('MemoCreate'); }} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #F0F4F8;
`;
