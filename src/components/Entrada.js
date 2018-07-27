import React from 'react'
import {View, StyleSheet} from 'react-native'
import Numero from './Numero.js'

export default props => (
    <View style={styles.generalView}>
        <Numero num={props.num1}/>
        <Numero num={props.num2} />
    </View>
)

const styles = StyleSheet.create({
    generalView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})