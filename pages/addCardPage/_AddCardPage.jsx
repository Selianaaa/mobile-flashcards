import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useNavigation } from '@react-navigation/native';

import { PageTitle, BaseCard, BaseInput } from '../../components';
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
      <BaseCard style={styles.card}>
        <Text style={styles.text}>Question:</Text>
        <BaseInput value={question} changeHandler={setQuestion} />

        <Text style={[styles.text, { marginTop: 40 }]}>Answer:</Text>

        <BaseInput value={answer} changeHandler={setAnswer} />
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
      </BaseCard>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 310,
    alignSelf: 'center',
    paddingTop: 40,
  },
  text: {
    color: '#0c460a',
    fontSize: 24,
    textAlign: 'center',
  },

  btn: {
    marginTop: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    width: 270,
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
