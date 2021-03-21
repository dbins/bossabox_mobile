import React from "react";
import { configure, shallow, mount } from "enzyme";
import Lista from "../../src/components/Lista";
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
} from "../../src/components/Lista/styles.js"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });

const dados = [
  {
    title: "test-tool",
    link: "http://www.google.com.br",
    description: "test-tool description wow",
    tags: ["test", "tool", "wow", "such"],
    id: 5
  },
  {
    title: "test-tool 2",
    link: "http://www.google.com.br",
    description: "test-tool description wow",
    tags: ["test", "tool", "wow", "such"],
    id: 6
  }
];
describe("Componente Lista", () => {
  it("Deve montar lista", () => {
    const registros = dados.length;
    const wrapper = shallow(
      <Lista repositories={dados} acao={() => {}} />
    ).dive();
	expect(wrapper.find(Repository).length).toEqual(2);
    expect(wrapper.find(Header).length).toEqual(2);
	
  });
});
