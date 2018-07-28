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
      num1: "10", 
      num2: "25"
    }
    this.calcular = this.calcular.bind(this)
    this.atualizaValor = this.atualizaValor.bind(this)
  }

  calcular(){
    var resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2)
    console.log(resultado)
  }

  atualizaValor(nome,valor){
    const obj = {}
    obj[nome] = valor
    this.setState(obj)
  }

  render(){
      return(
        <View>
            <Entrada num1={this.state.num1} num2={this.state.num2}
                     atualizaValor={this.atualizaValor} />
            <Operacao />
            <Comando acao={this.calcular}/>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  
});

export {Painel}