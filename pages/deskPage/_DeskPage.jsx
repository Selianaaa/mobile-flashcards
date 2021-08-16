import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { PageTitle } from '../../components';

//  TODO: ADD CARD, TAKE QUIZ
const DeskPage = ({ route, desks }) => {
  const { deskId } = route.params;
  const { title, questions } = desks[deskId];

  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <PageTitle>{title}</PageTitle>
      <Text style={styles.subtitle}>{`${questions.length} cards`}</Text>

      <View style={styles.options}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Add Card', { deskId: deskId })}
        >
          <Text style={styles.btnText}>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 50,
    display: 'flex',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#1e7e1b',
  },
  options: {
    position: 'relative',
    marginTop: 100,
  },
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
const mapStateToProps = ({ app }) => ({
  desks: app.desks,
});

export default connect(mapStateToProps)(DeskPage);
