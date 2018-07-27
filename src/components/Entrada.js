import React from 'react'
import {View, StyleSheet} from 'react-native'
import Numero from './Numero.js'

export default props => (
    <View style={styles.generalView}>
        <Numero />
        <Numero />
    </View>
)

const styles = StyleSheet.create({
    generalView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})