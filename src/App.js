import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Topo from './components/Topo.js'
import Resultado from './components/Resultado.js'
import Painel from './components/Painel.js'

export default props => (
    <View>
        <Topo />
        <Resultado />
        <Painel />
    </View>
)

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('app7', () => app7);
