import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default props => (
    <View style={viewCabecalho}>
        <Text style={textCabecalho}> Calculadora 1.0 </Text>
    </View>
)

const styles = StyleSheet.create({
    viewCabecalho :{
        alignItems: 'center',
        backgroundColor: '#2196F3'

    },
    textCabecalho: {
        fontSize: 30,
        color: 'white',
        padding: 15
    }
})

const {viewCabecalho, textCabecalho} = styles