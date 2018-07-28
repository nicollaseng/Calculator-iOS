import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default props => (
   <View style={inputView}>
       <TextInput placeholder="Resultado" 
                style={textInput} value={props.resultado} />
    </View>
)

const styles = StyleSheet.create({
  inputView: {
    height: 60
  },
  textInput: {
      fontSize: 40,
      color: 'grey',
      flex:1
  }
});

const {inputView, textInput} = styles