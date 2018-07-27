import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default props => (
   <View style={inputView}>
       <TextInput placeholder="Digite aqui" style={{flex:1}}/>
    </View>
)

const styles = StyleSheet.create({
  inputView: {
    height: 60
  }
});

const {inputView} = styles