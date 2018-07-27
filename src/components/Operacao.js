import React, {Component} from 'react'
import { Picker} from 'react-native'

export default class Operacao extends Component {
    constructor(props){
        super(props)
        this.state ={
            operacao: ''
        }
    }
    render(){
        return(
            <Picker selectedValue={this.state.operacao} 
                    onValueChange={value => this.setState({operacao: value})}>
                <Picker.item label="Soma" value="soma" />
                <Picker.item label="Subtracao" value="subtracao" />
            </Picker>
        )
    }
}
