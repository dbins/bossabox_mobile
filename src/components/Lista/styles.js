import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

export const Container = styled.ScrollView`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const RemoveButton = styled.TouchableOpacity`
  background-color: #365df0;
  border-radius:5px;
  padding-top:5px;
  padding-left:10px;
  color: #ffffff;
  width: ${windowWidth * 0.2};
  height: 30px;
`;

export const TextButton = styled.Text`
`;

export const Repository = styled.View`
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 15px;
  width: ${windowWidth * 0.9};
`;

export const Header = styled.View`
    display: flex;
    flex-direction: column;
	align-items: flex-start;
	width: ${windowWidth * 0.6};
`;

export const ContainerConteudo = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const ContainerTags = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;

`;

export const Tag = styled.Text`
  color:#000000;
  margin: 10px;
  font-size: 10px;
`;

export const Strong = styled.Text`
  font-weight: bold;
  color:#000000;
  font-size: 24px;
  margin-top: 10px;
`;

export const Small = styled.Text`
    font-size: 14px;
    color: #666;
`;