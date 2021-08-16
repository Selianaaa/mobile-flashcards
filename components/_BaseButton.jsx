import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const BaseButton = ({ children, pressHandler, style = {}, textStyle = {} }) => {
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={pressHandler}>
      <Text style={[styles.btnText, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginTop: 30,
    width: 300,
    backgroundColor: '#0c460a',
    borderRadius: 25,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default BaseButton;
