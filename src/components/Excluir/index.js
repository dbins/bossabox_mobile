import React from "react";
import { Modal, View } from "react-native";
import { PropTypes } from "prop-types";
import {
  RemoveButton,
  CancelButton,
  ContainerButton,
  SubTitulo,
  TituloModal,
  TextButton,
  ModalView,
  ModalInternal
} from "./styles.js";

const customStyles = {
  content: {
    animationType: "slide",
    transparent:"true"
  }
};

const Excluir = ({ abrir, fechar, deletar, codigo, titulo }) => (
  <Modal
    transparent={true}
    visible={abrir}
    onRequestClose={fechar}
    contentLabel="Modal Excluir"
    style={customStyles}
  >
  <ModalView>
	<ModalInternal>		
    <TituloModal>x Remove Tool</TituloModal>
    <SubTitulo>Are you sure you want to remove {titulo}</SubTitulo>
    <ContainerButton>
      <CancelButton onPress={fechar}><TextButton>Cancel</TextButton></CancelButton>
      <RemoveButton onPress={() => deletar(codigo)}><TextButton>Yes, remove</TextButton></RemoveButton>
    </ContainerButton>
	
	</ModalInternal>
	</ModalView>
  </Modal>
);
Excluir.propTypes = {
  /** Função que vai excluir a tool */
  deletar: PropTypes.func.isRequired,
  /** Função que vai fechar o modal */
  fechar: PropTypes.func.isRequired,
  /** Booleando que define se a janela pode ser exibida */
  abrir: PropTypes.bool,
  /** ID da tool */
  codigo: PropTypes.number,
  /** Title da tool */
  titulo: PropTypes.string.isRequired
};



export default Excluir;
