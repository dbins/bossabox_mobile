import React from "react";
import { TouchableOpacity } from 'react-native';
import {
  Container,
  Repository,
  Header,
  ContainerConteudo,
  ContainerTags,
  Tag,
  Strong,
  Small,
  RemoveButton,
  TextButton
} from "./styles"; //Quando nao tem exports default, tem que usar o {}
import PropTypes from "prop-types";
//Stateless recebe props
const List = ({ acao, repositories, navigation }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <ContainerConteudo>
          <Header>
            <TouchableOpacity onPress={() =>
				navigation.navigate('Link', {
					link_selecionado:  repository.link
				})
           
			}>
              <Strong>{repository.title}</Strong>
            </TouchableOpacity>
            <Small>{repository.description}</Small>
          </Header>
          <RemoveButton
            onPress={() => {
              acao(repository);
            }}
          >
            <TextButton>x remove</TextButton>
          </RemoveButton>
        </ContainerConteudo>
        <ContainerTags>
          {repository.tags instanceof Array &&
            repository.tags.map(tag => <Tag key={tag}>#{tag} </Tag>)}
        </ContainerTags>
      </Repository>
    ))}
  </Container>
);

//depende do modulo prop-types
List.propTypes = {
  //Array de objetos
  /** Array com os dados das tools recuperadas da API */
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      link: PropTypes.string,
      description: PropTypes.string,
      tags: PropTypes.array
    })
  ),
  /** Função que vai exibir o modal de excluir */
  acao: PropTypes.func.isRequired
};

export default List;
