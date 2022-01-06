import React from 'react';
// import { Keyboard } from 'react-native';
// eslint-disable-next-line
import styled, { css } from '@emotion/native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

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
  line-height: 24;
`;

export default function MemoEditScreen() {
  return (
    <Container>
      <AppBar />
      <EditorContainer>
        <Editor multiline value="買い物リスト" />
        {/* <Editor multiline value="買い物リスト" onSubmitEditing={Keyboard.dismiss} /> */}
      </EditorContainer>
      <CircleButton name="check" />
    </Container>
  );
}
