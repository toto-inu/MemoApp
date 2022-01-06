import React from 'react';
// eslint-disable-next-line
import styled, { css } from '@emotion/native';

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
  line-height: 24px;
`;

export default function MemoCreateScreen(props) {
  const { navigation } = props;
  return (
    <Container>
      <EditorContainer>
        <Editor multiline value="" />
      </EditorContainer>
      <CircleButton name="check" onPress={() => { navigation.goBack(); }} />
    </Container>
  );
}
