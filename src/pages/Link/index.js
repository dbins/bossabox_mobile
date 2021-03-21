import React, { useEffect, useState, Component } from 'react';
import { Text, Dimensions  } from 'react-native';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NetInfo from "@react-native-community/netinfo"
import Header from '../../components/Header';
import {Container, Aviso} from './styles';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Link extends Component {

	
  state = {
    conteudo: '',
	network: {isConnected:true},
  };	
  
  componentDidMount() {
	var link_selecionado = decodeURIComponent(this.props.route.params.link_selecionado);
	this.setState({conteudo: link_selecionado});
	NetInfo.fetch().then(state => {
	  this.setState({ network: state });
	});
  }
  
  
  render() {
    return (
        <Container>
          <Header title="Link" navigation={this.props.navigation}  back={true}/>
			{this.state.network.isConnected ? (
			  <WebView source={{ uri: this.state.conteudo }} />
			) : (
			  <Aviso>Não existe conexão com a Internet</Aviso>
			)}
        </Container>
    );
  }
}

Link.propTypes = {
  isFocused: PropTypes.bool,
  tintColor: PropTypes.string,
};

export default Link;
