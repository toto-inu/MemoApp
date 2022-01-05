import React from 'react';
import styled from '@emotion/native';
import { string } from 'prop-types';

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
  /* box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); */
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
};

export default function CircleButton(props) {
  const { children } = props;
  return (
    <Container>
      <Label>{children}</Label>
    </Container>
  );
}
