import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

export const TituloModal = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  color: #170c3a;
  margin-bottom: 15px;
`;

export const LabelFormModal = styled.Text`
  font-size: 20px;
  text-align: left;
  color: #170c3a;
  margin-bottom: 5px;
`;

export const InputFormModal = styled.TextInput`
  width: 100%;
  font-size: 20px;
  text-align: left;
  color: #8f8a9b;
  width: ${windowWidth * 0.9}px;
  background:#FFFFFF
  margin-bottom: 15px;
`;

export const TextareaFormModal = styled.TextInput`
  width: ${windowWidth * 0.9}px;
  background:#FFFFFF
  font-size: 20px;
  text-align: left;
  height: 80px;
  color: #8f8a9b;
  margin-bottom: 15px;
`;

export const FormModal = styled.View`
  padding-left: 10px;
`;

export const ContainerButton = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const TextButton = styled.Text`
  color: #000000;
  margin-bottom:5px;  
`;
export const CancelButton = styled.TouchableOpacity`
  background-color: #cc4c4c;
  border-radius:5px;
  color: #ffffff;
  width: 100px;
  height: 30px;
  margin: 10px;
  padding-top: 5px;
  padding-left: 20px;
`;

export const ActionButton = styled.TouchableOpacity`
  background-color: #365df0;
  border-radius:5px;
  color: #ffffff;
  width: 100px;
  height: 30px;
  margin: 10px;
  padding-top: 5px;
  padding-left: 20px;
`;

export const ModalView = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ModalInternal = styled.View`
    background-color: #808080;
`;