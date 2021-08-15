import React from 'react';
import { Text, StyleSheet } from 'react-native';

const PageTitle = ({ children }) => (
  <Text style={styles.title}>{children}</Text>
);

const styles = StyleSheet.create({
  title: {
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center',
    color: '#083506',
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default PageTitle;
