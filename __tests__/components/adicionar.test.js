import React from "react";
import { Modal } from "react-native";
import { configure, shallow, mount, ReactWrapper } from "enzyme";
import Adicionar from "../../src/components/Adicionar";
import {
  ActionButton,
  TituloModal,
  LabelFormModal,
  InputFormModal,
  TextareaFormModal,
  FormModal,
  ContainerButton
} from "../../src/components/Adicionar/styles.js";
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

describe("Componente Adicionar", () => {
  
  it("Deve atualizar o state do modal Adicionar", () => {
    const wrapper = mount(
      <Adicionar isOpen={true} acao={() => {}} fechar={() => {}} abrir={true} />
    );

    const state_inicial = {
      name: "test-tool",
      link: "http://www.google.com.br",
      description: "test-tool description wow",
      tags: ["test", "tool", "wow", "such"]
    };

    wrapper.setState({
      name: state_inicial.name,
      link: state_inicial.link,
      description: state_inicial.description,
      tags: state_inicial.tags
    });
    expect(wrapper.state("name")).toEqual(state_inicial.name);
    expect(wrapper.state("link")).toEqual(state_inicial.link);
    expect(wrapper.state("description")).toEqual(state_inicial.description);
    expect(wrapper.state("tags")).toEqual(state_inicial.tags);
  });
  
  it("Deve montar o modal Adicionar e deve ter nove componentes", () => {
    const wrapper = mount(
      <Adicionar isOpen={true} acao={() => {}} fechar={() => {}} abrir={true} />
    );

    //console.log(wrapper.find(TituloModal).debug());
	//console.log(wrapper.find(FormModal).debug());

    expect(wrapper.find(LabelFormModal).length).toEqual(4);
	expect(wrapper.find(InputFormModal).length).toEqual(3);
	expect(wrapper.find(TextareaFormModal).length).toEqual(1);
	expect(wrapper.find(ContainerButton).length).toEqual(1);
	
  });
  
   it("Deve atualizar o state do modal Adicionar ao alterar campos", () => {
    const wrapper = mount(
      <Adicionar isOpen={true} acao={() => {}} fechar={() => {}} abrir={true} />
    );
    const state_inicial = {
      name: "test-tool",
      link: "http://www.google.com.br",
      description: "test-tool description wow",
      tags: ["test", "tool", "wow", "such"]
    };
    
	//console.log(wrapper.find(InputFormModal).at(1).debug());

    //wrapper
    //  .find(InputFormModal).at(0).simulate('change', state_inicial.name);
    //wrapper
    //  .find(InputFormModal).at(2).simulate('change', {target: {value: state_inicial.link}});
    //wrapper
    //  .find(TextareaFormModal).simulate('change', {target: {value: state_inicial.description}});
    //expect(wrapper.state("name")).toEqual(state_inicial.name);
    //expect(wrapper.state("link")).toEqual(state_inicial.link);
    //expect(wrapper.state("description")).toEqual(state_inicial.description);
  });

  
});
