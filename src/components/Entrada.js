import React from 'react'
import {View, StyleSheet} from 'react-native'
import Numero from './Numero.js'

export default props => (
    <View style={styles.generalView}>
        <Numero num={props.num1} atualizaValor={props.atualizaValor}/>
        <Numero num={props.num2} atualizaValor={props.atualizaValor}/>
    </View>
)

const styles = StyleSheet.create({
    generalView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})