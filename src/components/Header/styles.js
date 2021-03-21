import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Content = styled.View`
  height: ${54 + getStatusBarHeight()}px;
  padding-top: ${getStatusBarHeight()}px;
  background-color: #000000;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Botoes = styled.View`
  width: 30%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 5px;
  width: 70%;
`;

export const Botao = styled(Icon)`
  color: #ffffff;
  background-color: transparent;
  font-size: 20px;
  margin-right:10px;
`;
