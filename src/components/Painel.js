import React, { Component } from 'react';
import Entrada from './Entrada.js'
import Operacao from './Operacao.js'
import Comando from './Comando.js'
import {
  StyleSheet,
  View
} from 'react-native';

export default class Painel extends Component {
  constructor(props){
    super(props)
    this.state = {
      num1: "", 
      num2: ""
    }
  }

  calcular(){
    console.log('Vamos calcular')
  }
  render(){
      return(
        <View>
            <Entrada num1={this.state.num1} num2={this.state.num2} />
            <Operacao />
            <Comando acao={this.calcular()}/>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  
});

export {Painel}