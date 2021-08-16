import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const BaseInput = ({ changeHandler, value, style = {} }) => {
  return (
    <TextInput
      style={[styles.input, style]}
      onChangeText={changeHandler}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#eef7ee',
    marginTop: 20,
    padding: 10,
    height: 45,
    width: 270,
    borderBottomColor: '#0c460a',
    borderBottomWidth: 2,
  },
});

export default BaseInput;
