import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default props => (
   <View style={inputView}>
       <TextInput placeholder="Resultado" style={{flex:1}} editable={false}/>
    </View>
)

const styles = StyleSheet.create({
  inputView: {
    height: 60
  }
});

const {inputView} = styles