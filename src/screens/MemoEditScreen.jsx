import React, { useState } from 'react';
import { Alert } from 'react-native';
// eslint-disable-next-line
import styled, { css } from '@emotion/native';
import { string, shape } from 'prop-types';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import { translateErrors } from '../utils';

export default function MemoEditScreen(props) {
  const { navigation, route } = props;
  const { id, bodyText } = route.params;
  const [body, setBody] = useState(bodyText);

  const handlePress = () => {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      ref
        .set({
          bodyText: body,
          updatedAt: new Date(),
        })
        .then(() => {
          navigation.goBack();
        })
        .catch((err) => {
          const errorMessage = translateErrors(err.code);
          Alert.alert(errorMessage.title, errorMessage.description);
        });
    }
  };

  return (
    <Container>
      <EditorContainer>
        <Editor
          multiline
          value={body}
          onChangeText={(text) => {
            setBody(text);
          }}
        />
        {/* <Editor multiline value="買い物リスト" onSubmitEditing={Keyboard.dismiss} /> */}
      </EditorContainer>
      <CircleButton name="check" onPress={handlePress} />
    </Container>
  );
}

MemoEditScreen.propTypes = {
  route: shape({
    params: shape({ id: string, bodyText: string }),
  }).isRequired,
};

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
