import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from '@emotion/native';
import { bool } from 'prop-types';

export default function Loading(props) {
  const { isLoading } = props;
  if (!isLoading) {
    return null;
  }
  return (
    <Container>
      <Inner>
        <ActivityIndicator size="large" color="#000" />
      </Inner>
    </Container>
  );
}

Loading.propTypes = {
  isLoading: bool,
};

Loading.defaultProps = {
  isLoading: false,
};

const Container = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 5;
`;

const Inner = styled.View`
  margin-bottom: 80px;
`;
