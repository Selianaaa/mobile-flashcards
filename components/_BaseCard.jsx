import React from 'react';
import { StyleSheet, View } from 'react-native';

const BaseCard = ({ children, style = {} }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    marginVertical: 10,
    backgroundColor: 'white',
    height: 400,
    width: 300,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
});

export default BaseCard;
