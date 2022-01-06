import React from 'react';
import styled, { css } from '@emotion/native';
import { string, func } from 'prop-types';
import { Feather } from '@expo/vector-icons';

const Container = styled.TouchableOpacity`
  background-color: #467FD3;
  width: 64px;
  height: 64px;
  border-radius: 32px;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 40px;
  bottom: 40px;
  /* eslint-disable-next-line ts-styled-plugin*/
  elevation: 8;
`;

CircleButton.propTypes = {
  style: string,
  name: string.isRequired,
  onPress: func,
};

CircleButton.defaultProps = {
  style: '',
  onPress: null,
};

export default function CircleButton(props) {
  const { style, name, onPress } = props;
  return (
    <Container style={css`${style}`} onPress={onPress}>
      <Feather name={name} size={32} color="white" />
    </Container>
  );
}
