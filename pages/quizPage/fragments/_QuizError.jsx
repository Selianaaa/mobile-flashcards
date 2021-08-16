import React, { Fragment } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const QuizError = ({ deskId }) => {
  const navigation = useNavigation();

  return (
    <Fragment>
      <View style={styles.errorWrapper}>
        <Text style={styles.errorText}>
          You couldn't take a quiz because there are no cards.
        </Text>
        <TouchableOpacity
          style={styles.errorBtn}
          onPress={() => navigation.navigate('Add Card', { deskId: deskId })}
        >
          <Text style={styles.btnText}>Add Card</Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  errorWrapper: {
    marginTop: 100,
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    width: 300,
    color: '#0c460a',
    textAlign: 'center',
  },
  errorBtn: {
    marginTop: 50,
    width: 250,
    backgroundColor: '#0c460a',
    borderRadius: 25,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default QuizError;
