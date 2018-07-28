import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'

export default props => (
    <View style={styles.viewInput}>
      <TextInput placeholder="Insira um número" style={styles.input} 
                value={props.num} onChangeText={valor => props.atualizaValor(valor)}/>
    </View>
)

const styles = StyleSheet.create({
    viewInput:{
        height: 60
    },
    input: {
        flex: 1,
        width: 150
    }
})