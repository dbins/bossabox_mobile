import React, { forwardRef } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { Content, Title, Botao, Botoes } from './styles';

function Header({ title, navigation, back }, ref) {
  return (
    <Content>
	  {back &&
       <TouchableOpacity
          onPress={() =>
            navigation.goBack()
          }
        >
          <Botao name="chevron-left" />
        </TouchableOpacity>
      }
      <Title>{title}</Title>
    </Content>
  );
}

export default Header;
