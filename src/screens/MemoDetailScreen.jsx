import React, { useState, useEffect } from 'react';
// import { View, Text, ScrollView} from 'react-native';
import styled from '@emotion/native';
import { string, shape } from 'prop-types';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import { dateToString } from '../utils';

export default function MemoDetailScreen(props) {
  const { navigation, route } = props;
  const { id } = route.params;
  const [memo, setMemo] = useState('');

  useEffect(() => {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    let unsubscribe = () => {};
    if (currentUser) {
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      unsubscribe = ref.onSnapshot((doc) => {
        console.log('🐈', doc.id, doc.data());
        const data = doc.data();
        setMemo({
          id: doc.id,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt.toDate(),
        });
      });
    }
    return () => unsubscribe;
  }, []);

  return (
    <Container>
      <MemoHeader>
        <MemoTitle numberOfLines={1}>{memo && memo.bodyText}</MemoTitle>
        <MemoDate>{memo && dateToString(memo.updatedAt)}</MemoDate>
      </MemoHeader>
      <MemoBody>
        <MemoText>{memo && memo.bodyText}</MemoText>
      </MemoBody>
      <CircleButton
        style={`
          top: 60px;
          bottom: auto;
        `}
        name="edit-2"
        onPress={() => {
          navigation.navigate('MemoEdit', {
            id: memo.id,
            bodyText: memo.bodyText,
          });
        }}
      />
    </Container>
  );
}

MemoDetailScreen.propTypes = {
  route: shape({
    routes: shape({
      id: string,
    }),
  }).isRequired,
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const MemoHeader = styled.View`
  background-color: #467fd3;
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
  line-height: 16px;
`;

const MemoBody = styled.ScrollView`
  padding: 32px 27px;
`;

const MemoText = styled.Text`
  font-size: 16px;
  line-height: 24px;
`;
