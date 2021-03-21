import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
export const Container = styled.View`
  background: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Cabecalho = styled.View`
  display: flex;
  flex-direction: column;
`;
export const Titulo = styled.Text`
  font-size: 24px;
  color: #ffffff;
  text-align: left;
`;

export const SubTitulo = styled.Text`
  font-size: 16px;
  color: #ffffff;
  text-align: left;
`;

export const WrapperInput = styled.View`
  display: flex;
  flex-direction: row;
  width: ${windowWidth * 0.5};
  justify-content: flex-start;
  height: 35px;
  padding: 5px;
  background: #fff;
  border-radius: 3px;
`;

export const InputSearch = styled.TextInput`
  flex: 1;
  height: 25px;
  padding: 0 20px;
  background: #fff;
  font-size: 12px;
  color: #444;
  border-style: solid;
`;


export const LabelSearch = styled.Text`
  font-weight: normal;
  font-size: 12px;
  margin-left: 10px;
  padding-top: 5px;
  text-align: left;
  color: #ffffff;
`;

export const ButtonAdicionar = styled.TouchableOpacity`
  width: 100px;
  height: 35px;
  padding-top: 5px;
  padding-left: 20px;
  margin-left: 10px;
  background-color: #365df0;
  color: #fff;
  border: 0;
  font-size: 20px;
  font-weight: normal;
  border-radius: 3px;
`;

export const Checkbox = styled.TouchableOpacity`

`;

export const Form = styled.View`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextButton = styled.Text`
  color: #000000;
  margin-bottom:5px;  
`;

export const Busca = styled.View`
  display: flex;
`;

export const ContainerCheckbox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
