import React from 'react';
// import { View, Text, TextInput } from "react-native";
// eslint-disable-next-line
import styled, { css } from "@emotion/native";
import { string, func } from 'prop-types';

const ButtonContainer = styled.TouchableOpacity`
  background-color: #467fd3;
  border-radius: 4px;
  align-self: flex-start;
  margin-bottom: 24px;
`;

const ButtonLabel = styled.Text`
  font-size: 16px;
  line-height: 32;
  padding: 8px 32px;
  color: #fff;
`;

export default function Button(props) {
  const { label, onPress } = props;
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonLabel>{ label }</ButtonLabel>
    </ButtonContainer>
  );
}

Button.propTypes = {
  label: string.isRequired,
  onPress: func,
};

Button.defaultProps = {
  onPress: null,
};
