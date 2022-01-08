import React from 'react';
// import { View, Text, TextInput } from "react-native";
// eslint-disable-next-line
import styled, { css } from '@emotion/native';
import { string, func } from 'prop-types';

export default function Button(props) {
  const { label, onPress, style } = props;
  return (
    <ButtonContainer
      onPress={onPress}
      style={css`
        ${style}
      `}
    >
      <ButtonLabel>{label}</ButtonLabel>
    </ButtonContainer>
  );
}

Button.propTypes = {
  label: string.isRequired,
  onPress: func,
  style: string,
};

Button.defaultProps = {
  onPress: null,
  style: '',
};

const ButtonContainer = styled.TouchableOpacity`
  background-color: #467fd3;
  border-radius: 4px;
  align-self: flex-start;
  margin-bottom: 24px;
`;

const ButtonLabel = styled.Text`
  font-size: 16px;
  // これだー！
  line-height: 32px;
  padding: 8px 32px;
  color: #fff;
`;
