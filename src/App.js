import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import Topo from './components/Topo.js'
// import Resultado from './components/Resultado.js'
// import Painel from './components/Painel.js'

import {Painel, Topo, Resultado} from './components'

export default class App extends Component { 
    
    constructor(props){
        super(props)
        this.state = {
          num1: "10", 
          num2: "25",
          operacao: '',
          resultado: ''
        }
        this.calcular = this.calcular.bind(this)
        this.atualizaValor = this.atualizaValor.bind(this)
        this.atualizaOperacao = this.atualizaOperacao.bind(this)
      }
    
      calcular(){
        var result  
        if(this.state.operacao === 'soma'){
            result = parseFloat(this.state.num1) + parseFloat(this.state.num2)
          console.log(result)
        }else if(this.state.operacao === 'subtracao'){
            result = parseFloat(this.state.num1) - parseFloat(this.state.num2)
          console.log(result)
        }else{
          result = 0
        }
        this.setState({
            resultado: result.toString()
        })
      }
    
      atualizaResultado(){
        this.setState({resultado: result})
      }
    
      atualizaValor(nome,valor){
        const obj = {}
        obj[nome] = valor
        this.setState(obj)
      }
    
      atualizaOperacao(valor){
        this.setState({operacao: valor})
      }


    render(){
        return(
            <View>
                <Topo />
                <Resultado resultado={this.state.resultado}/>
                <Painel 
                    num1={this.state.num1}
                    num2={this.state.num2}
                    operacao={this.state.operacao}
                    atualizaValor={this.atualizaValor}
                    atualizaOperacao={this.atualizaOperacao}
                    calcular={this.calcular}
                
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

});
