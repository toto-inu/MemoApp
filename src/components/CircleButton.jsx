import React from 'react';
import styled, { css } from '@emotion/native';
import { string, shape } from 'prop-types';

const Container = styled.View`
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

const Label = styled.Text`
  color: #fff;
  font-size: 40px;
  line-height: 40px;
`;

CircleButton.propTypes = {
  children: string.isRequired,
  style: string,
};

CircleButton.defaultProps = {
  style: '',
};

export default function CircleButton(props) {
  const { children, style } = props;
  return (
    <Container style={css`${style}`}>
      <Label>{children}</Label>
    </Container>
  );
}
