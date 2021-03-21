import React, { Component } from "react";
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Form,
  Titulo,
  SubTitulo,
  Cabecalho,
  Busca,
  InputSearch,
  CheckboxSearch,
  LabelSearch,
  ButtonAdicionar,
  WrapperInput,
  TextButton,
  Checkbox,
  ContainerCheckbox
} from "./styles.js";
import List from "../../components/Lista/index";
import Excluir from "../../components/Excluir/index";
import Adicionar from "../../components/Adicionar/index";
import api from "../../services/api";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      modalIsOpen2: false,
      repositoryError: false,
      repositoryInput: "",
      repositoryCheck: false,
      code: 0,
      title: "",
      results: [],
      repositories: [],
      search: []
    };
    this.deletar = this.deletar.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal2 = this.openModal2.bind(this);
    this.closeModal2 = this.closeModal2.bind(this);
  }

  listarRepositorios = async function() {
    try {
      const response = await api.get("/tools/");
      this.setState({ repositories: response.data, results: response.data });
    } catch (error) {
	   //Alert.alert(
	  //	  "VUTTR",
	  //	  "Não foi possível conectar com o repositório",
	  //	  [
      //			{ text: "OK"}
	  //	  ],
	  //	  { cancelable: false }
      //);
      this.setState({ repositoryError: true });
    }
  };

  async componentDidMount() {
    await this.listarRepositorios();
  }

  adicionar = async dados => {
    try {
      const response = await api.post("/tools/", dados);
      await this.listarRepositorios();
      this.setState({ repositoryError: false, modalIsOpen: false });
    } catch (error) {
      Alert.alert(
	  	  "VUTTR",
	  	  "Não foi possível conectar incluir o registro",
	  	  [
      			{ text: "OK"}
	  	  ],
	  	  { cancelable: false }
      );
      this.setState({ repositoryError: true, modalIsOpen: false });
    }
  };

  deletar = async id => {
    try {
      const response = await api.delete("/tools/" + id);
      const repositories = this.state.repositories;
      if (response.status === 200) {
        const atualizado = repositories.filter(item => item.id !== id);
        this.setState({ modalIsOpen2: false, repositories: atualizado });
		this.setState({ results: atualizado });
      } else {
        this.setState({ repositoryError: true, modalIsOpen2: false });
		Alert.alert(
	  	  "VUTTR",
	  	  "Não foi possível excluir o registro (" + id + ")",
	  	  [
      			{ text: "OK"}
	  	  ],
	  	  { cancelable: false }
        );
      }
    } catch (error) {
      Alert.alert(
	  	  "VUTTR",
	  	  "Não foi possível excluir o registro",
	  	  [
      			{ text: "OK"}
	  	  ],
	  	  { cancelable: false }
      );
      this.setState({ repositoryError: true, modalIsOpen2: false });
    }
  };

  marcarCheckbox = async () => {
    this.setState({ repositoryCheck: !this.state.repositoryCheck });
    console.log(this.state.repositoryCheck);
    await this.pesquisarRepositorio(this.state.repositoryInput);
  };

  pesquisarRepositorio = async search => {
    this.setState({ repositoryInput: search });

    if (search.length > 3) {
      this.setState({ loading: true });
      try {
        let response;
        if (this.state.repositoryCheck) {
          response = await api.get("/tools?tags_like=" + search);
        } else {
          response = await api.get("/tools?q=" + search);
        }
        if (response.status === 200) {
          this.setState({
            loading: false,
            search: response.data,
            results: response.data,
            repositoryError: false
          });
        }
      } catch (err) {
        this.setState({ repositoryError: true });
      } finally {
        this.setState({ loading: false });
      }
    } else {
      this.setState({ results: this.state.repositories });
    }
  };

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  openModal2(repository) {
    this.setState({
      code: repository.id,
      title: repository.title,
      modalIsOpen2: true
    });
  }

  closeModal2() {
    this.setState({ modalIsOpen2: false });
  }

  render() {
    return (
      <Container>
        <Cabecalho>
          <Titulo>VUTTR</Titulo>
          <SubTitulo>Very Useful Tools to Remember</SubTitulo>
          <Form>
            <Busca>
              <WrapperInput>
                <Icon name="search" color={"#000000"} size={24}/>
                <InputSearch
                  type="text"
                  placeholder="search"
                  value={this.state.repositoryInput}
                  onChangeText={text => this.pesquisarRepositorio(text)}
                />
              </WrapperInput>
			  <ContainerCheckbox>
				  <Checkbox onPress={this.marcarCheckbox}>
					{this.state.repositoryCheck ? (
					<Icon name="check" color={"#FFFFFF"} size={24}/>
					) : (
					<Icon name="check-box-outline-blank" color={"#FFFFFF"} size={24}/>
					)}	
				  </Checkbox>
				  <LabelSearch>Search in tags only</LabelSearch>
			  </ContainerCheckbox>
            </Busca>
            <ButtonAdicionar onPress={this.openModal}><TextButton>+ Add</TextButton></ButtonAdicionar>
          </Form>
        </Cabecalho>
        <Adicionar
          abrir={this.state.modalIsOpen}
          fechar={this.closeModal}
          acao={this.adicionar}
        />
        <Excluir
          abrir={this.state.modalIsOpen2}
          fechar={this.closeModal2}
          deletar={this.deletar}
          codigo={this.state.code}
          titulo={this.state.title}
        />

        <List
          navigation={this.props.navigation}
		  repositories={this.state.results}
          acao={this.openModal2}
          deletar={this.deletar}
        />
      </Container>
    );
  }
}
