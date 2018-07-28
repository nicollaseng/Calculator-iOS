import React from 'react'
import {View, TouchableOpacity, Text,
        StyleSheet} from 'react-native'

export default props => (
    <View style={generalView}>
        <TouchableOpacity onPress={props.acao} style={touchableStyle}>
            <Text style={textButton}>Calcular</Text>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    generalView:{
        alignItems: 'center'
    },
    textButton: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        padding: 20

    },
    touchableStyle: {
        backgroundColor: '#3399ff',
        width: 200
    }
})

const {generalView, textButton, touchableStyle} = styles