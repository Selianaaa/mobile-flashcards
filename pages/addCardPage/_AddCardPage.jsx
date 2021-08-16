import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useNavigation } from '@react-navigation/native';

import { PageTitle } from '../../components';
import { appActions } from '../../store';

const AddCardPage = ({ route, desks, addNewCard }) => {
  const { deskId } = route.params;
  const { title } = desks[deskId];

  const navigation = useNavigation();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const btnDisabled = () => !question.length || !answer.length;

  return (
    <ScrollView style={{ padding: 20 }}>
      <PageTitle>{`New Card in ${title}`}</PageTitle>
      <View style={styles.card}>
        <Text style={styles.text}>Question:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setQuestion}
          value={question}
        />

        <Text style={[styles.text, { marginTop: 40 }]}>Answer:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setAnswer}
          value={answer}
        />
        <TouchableOpacity
          disabled={btnDisabled()}
          style={[
            styles.btn,
            { backgroundColor: !btnDisabled() ? '#1e7e1b' : '#cdddcc' },
          ]}
          onPress={() => {
            addNewCard(deskId, { question, answer }, navigation);
            setQuestion('');
            setAnswer('');
          }}
        >
          <Text
            style={[
              styles.btnText,
              { color: !btnDisabled() ? 'white' : '#295c27' },
            ]}
          >
            Create Card
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    marginVertical: 10,
    backgroundColor: 'white',
    height: 400,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 1,
    display: 'flex',
    alignItems: 'center',
    paddingTop: 40,
  },
  text: {
    color: '#0c460a',
    fontSize: 24,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#eef7ee',
    marginTop: 20,
    padding: 10,
    height: 45,
    width: 300,
    borderBottomColor: '#0c460a',
    borderBottomWidth: 2,
  },
  btn: {
    marginTop: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    width: 300,
    borderRadius: 5,
  },
  btnText: { fontWeight: 'bold', fontSize: 23 },
});

const mapStateToProps = ({ app }) => ({
  desks: app.desks,
});

const mapDispatchtoProps = (dispatch) => ({
  ...bindActionCreators(appActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchtoProps)(AddCardPage);
