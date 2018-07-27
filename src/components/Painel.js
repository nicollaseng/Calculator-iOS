import React, { Component } from 'react';
import Entrada from './Entrada.js'
import Operacao from './Operacao.js'
import Comando from './Comando.js'
import {
  StyleSheet,
  View
} from 'react-native';

const Painel = props => (
    <View>
        <Entrada />
        <Operacao />
        <Comando />
    </View>
)

const styles = StyleSheet.create({
  
});

export {Painel}