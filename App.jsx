import { React } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import tw from 'tailwind-rn';
// import styled, { css } from '@emotion/native';
import styled from '@emotion/native';

const MemoListItem = styled.View`
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 19px;
  align-items: center;
  border-bottom-width: 1px;
  border-color: rgba(0, 0, 0, 0.15);
`;

const CircleButton = styled.View`
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

const CircleButtonLabel = styled.Text`
  color: #fff;
  font-size: 40px;
  line-height: 40px;
`;

export default function App() {
  return (
    <View style={tw('flex-1 bg-blue-50')}>
      <View style={styles.appbar}>
        <View style={styles.appbarInner}>
          <Text style={styles.appbarTitle}>Memo App</Text>
          <Text style={styles.appbarRight}>ログアウト</Text>
        </View>
      </View>

      {[1, 2, 3].map((el) => (
        <View key={el}>
          <MemoListItem>
            <View>
              <Text style={tw('text-base leading-8')}>買い物リスト</Text>
              <Text style={tw('text-xs leading-4')}>2020年12月24日</Text>
            </View>
            <View>
              <Text>X</Text>
            </View>
          </MemoListItem>
        </View>
      ))}

      <CircleButton>
        <CircleButtonLabel>+</CircleButtonLabel>
      </CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    // backgroundColor: 'gray',
    alignItems: 'center',
  },
  appbarRight: {
    position: 'absolute',
    right: 19,
    bottom: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  appbarTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
});
