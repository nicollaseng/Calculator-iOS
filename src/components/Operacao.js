import React, {Component} from 'react'
import { Picker} from 'react-native'

export default class Operacao extends Component {
    render(){
        return(
            <Picker selectedValue={this.props.operacao} 
                    onValueChange={valor => this.props.atualizaOperacao(valor)}>
                <Picker.item label="Soma" value="soma" />
                <Picker.item label="Subtracao" value="subtracao" />
                <Picker.item label="Multiplicação" value="multiplicacao" />
                <Picker.item label="Divisão" value="divisao" />
            </Picker>
        )
    }
}
