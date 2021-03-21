import styled from 'styled-components/native';

export const RemoveButton = styled.TouchableOpacity`
  background-color: #10b26c;
  color: #ffffff;
  width: 100px;
  height: 30px;
  margin: 10px;
  padding-top:5px;
  padding-left:5px;
`;

export const CancelButton = styled.TouchableOpacity`
  background-color: #cc4c4c;
  color: #ffffff;
  width: 100px;
  height: 30px;
  margin: 10px;
  padding-top:5px;
  padding-left:5px;
`;

export const ContainerButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const SubTitulo = styled.Text`
  margin: 10px;
`;

export const TituloModal = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  color: #170c3a;
  margin-bottom: 15px;
`;

export const TextButton = styled.Text`
  color: #000000;
  margin-bottom:5px;  
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