import React, { Component } from "react";
import { Modal, View, Alert } from "react-native";
import {
  ActionButton,
  TituloModal,
  LabelFormModal,
  InputFormModal,
  TextareaFormModal,
  FormModal,
  ContainerButton,
  TextButton,
  CancelButton,
  ModalView,
  ModalInternal
} from "./styles.js";
import { PropTypes } from "prop-types";


export default class Adicionar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      link: "",
      description: "",
      tags: ""
    };
  }

  static propTypes = {
    /** Função que vai cadastrar a nova tool */
    acao: PropTypes.func.isRequired,
    /** Função que vai fechar o modal */
    fechar: PropTypes.func.isRequired,
    /** Booleando que define se o modal pode ser exibido */
    abrir: PropTypes.bool.isRequired
  };

  validateUrl = value => {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
	return !!pattern.test(value);
  };

  saveTool = () => {
    let mensagem = "";
    if (this.state.name === "") {
      mensagem += "Tool name required!\n";
    }
    if (this.state.link === "") {
      mensagem += "Tool link required!\n";
    } else {
	  console.log(this.state.link);
      if (!this.validateUrl(this.state.link)) {
        mensagem += "Tool link is not valid!\n";
      }
    }
    if (this.state.description === "") {
      mensagem += "Tool description required!\n";
    }
    if (this.state.tags === "") {
      mensagem += "Tool tags required!\n";
    }
    if (mensagem === "") {
      let dados = {};
      dados.title = this.state.name;
      dados.link = this.state.link;
      dados.description = this.state.description;
      dados.tags = String(this.state.tags).split(",");
      this.props.acao(dados);
      //Fechar janela
    } else {
		 Alert.alert(
	  	  "VUTTR",
	  	  mensagem,
	  	  [
      			{ text: "OK"}
	  	  ],
	  	  { cancelable: false }
      );
    }
  };

  render() {
    return (
      <Modal
	    transparent={true}
        visible={this.props.abrir}
        onRequestClose={this.props.fechar}
        contentLabel="Add Tool"
      >
		<ModalView>
			<ModalInternal>
				<TituloModal>+ Add new tool</TituloModal>
				<FormModal>
				  <LabelFormModal>Tool Name</LabelFormModal>
				  <InputFormModal
					value={this.state.name}
					onChangeText={text => this.setState({ name: text })}
				  />
				  <LabelFormModal>Tool Link</LabelFormModal>
				  <InputFormModal
					value={this.state.link}
					onChangeText={text => this.setState({ link: text })}
				  />
				  <LabelFormModal>Tool description</LabelFormModal>
				  <TextareaFormModal
					value={this.state.description}
					onChangeText={text => this.setState({ description: text })}
				  />
				  <LabelFormModal>Tags</LabelFormModal>
				  <InputFormModal
					value={this.state.tags}
					onChangeText={text => this.setState({ tags: text })}
				  />
				  <ContainerButton>
					<CancelButton onPress={this.props.fechar}><TextButton>Cancel</TextButton></CancelButton>
					<ActionButton onPress={this.saveTool}><TextButton>Add Tool</TextButton></ActionButton>
				  </ContainerButton>
				</FormModal>
			</ModalInternal>
		</ModalView>
      </Modal>
    );
  }
}
