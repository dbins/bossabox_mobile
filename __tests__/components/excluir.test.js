//https://blog.theodo.com/2017/04/enzyme-fast-and-simple-react-testing/
import React from "react";
import { findDOMNode } from "react-dom";
import { Modal } from "react-native";
import { configure, shallow, mount, render, ReactWrapper } from "enzyme";
import Excluir from "../../src/components/Excluir";
import {
  RemoveButton,
  CancelButton,
  ContainerButton,
  SubTitulo,
  TituloModal,
  TextButton,
  ModalView,
  ModalInternal
} from "../../src/components/Excluir/styles.js";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });

var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { document } = new JSDOM("", { url: "https://example.org/" }).window;
global.document = document;
global.window = document.defaultView;
Object.keys(document.defaultView).forEach(property => {
  if (typeof global[property] === "undefined") {
    global[property] = document.defaultView[property];
  }
});
function suppressDomErrors() {
  const suppressedErrors = /(Received `%s` for a non-boolean attribute `%s`|React does not recognize the.*prop on a DOM element|Unknown event handler property|is using uppercase HTML|Received `true` for a non-boolean attribute `accessible`|The tag.*is unrecognized in this browser|PascalCase)/;
  // eslint-disable-next-line no-console
  const realConsoleError = console.error;
  // eslint-disable-next-line no-console
  console.error = message => {
    if (message.match(suppressedErrors)) {
      return;
    }
    //realConsoleError(message);
  };
}
suppressDomErrors();

describe("Componente Excluir", () => {
  it("Deve receber a prop titulo e retonar o seu valor", () => {
    const wrapper = mount(
      <Excluir
        titulo={"TESTE"}
        codigo={0}
        deletar={() => {}}
        fechar={() => {}}
      />
    );
    expect(wrapper.prop("titulo")).toEqual("TESTE");
  });
  
  it("Deve receber a prop codigo e retonar o seu valor", () => {
    const wrapper = mount(
      <Excluir
        titulo={"TESTE2"}
        codigo={5}
        deletar={() => {}}
        fechar={() => {}}
      />
    );
    expect(wrapper.prop("codigo")).toEqual(5);
  });
  
   it("Deve montar o modal Excluir com o nome do produto e deve ter dois botões", () => {
    const wrapper = mount(
      <Excluir
        isOpen={true}
        titulo={"TESTE"}
        codigo={0}
        deletar={() => {}}
        fechar={() => {}}
      />
    );
	 expect(wrapper.find(RemoveButton).length).toEqual(1);
	 expect(wrapper.find(CancelButton).length).toEqual(1);
  });

  
});
