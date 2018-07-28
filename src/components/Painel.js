import React, { Component } from 'react';
import Entrada from './Entrada.js'
import Operacao from './Operacao.js'
import Comando from './Comando.js'
import Resultado from './Resultado.js'
import {
  StyleSheet,
  View
} from 'react-native';

export default class Painel extends Component {
  render(){
      return(
        <View>
            <Entrada num1={this.props.num1} num2={this.props.num2}
                     atualizaValor={this.props.atualizaValor} />
            <Operacao operacao={this.props.operacao}
                      atualizaOperacao={this.props.atualizaOperacao}/>
            <Comando acao={this.props.calcular}/>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  
});

export {Painel}