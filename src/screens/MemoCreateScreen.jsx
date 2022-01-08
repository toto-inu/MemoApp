import React, { useState } from 'react';
// eslint-disable-next-line
import styled, { css } from '@emotion/native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';

export default function MemoCreateScreen(props) {
  const { navigation } = props;
  const { currentUser } = firebase.auth();
  const [bodyText, setBodyText] = useState('');

  const onPress = () => {
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/memos`);
    ref.add({
      bodyText,
      updatedAt: new Date(),
    })
      .then((docRef) => {
        console.log('Created!', docRef.id);
        navigation.goBack();
      })
      .catch((err) => {
        console.log('Error!', err);
      });
  };
  return (
    <Container>
      <EditorContainer>
        <Editor
          multiline
          value={bodyText}
          onChangeText={(text) => { setBodyText(text); }}
          autoFocus
        />
      </EditorContainer>
      <CircleButton
        name="check"
        onPress={onPress}
      />
    </Container>
  );
}

const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

const EditorContainer = styled.View`
  padding: 32px 27px;
  flex: 1;
`;

const Editor = styled.TextInput`
  /* background: orange; */
  flex: 1;
  text-align-vertical: top;
  font-size: 16px;
  line-height: 24px;
`;
