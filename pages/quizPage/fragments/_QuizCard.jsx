import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { BaseButton } from '../../../components';

const QuizCard = ({
  card,
  cardNumber,
  cardsAmount,
  handleCorrect,
  handleIncorrect,
}) => {
  const [answerShown, setAnswerShown] = useState(false);

  return (
    <View style={styles.card}>
      <Text style={styles.subtitle}>
        {`Card: ${cardNumber}/${cardsAmount}`}
      </Text>

      <Text style={styles.question}>{card.question}</Text>

      {answerShown ? (
        <Text style={styles.answerText}>{card.answer}</Text>
      ) : (
        <TouchableOpacity onPress={() => setAnswerShown(true)}>
          <Text style={styles.textBtn}>Show Answer</Text>
        </TouchableOpacity>
      )}

      <View style={styles.btnsWrapper}>
        <BaseButton
          pressHandler={handleIncorrect}
          style={styles.btn}
          textStyle={styles.btnText}
        >
          Incorrect
        </BaseButton>

        <BaseButton
          pressHandler={handleCorrect}
          style={styles.btn}
          textStyle={styles.btnText}
        >
          Correct
        </BaseButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 16,
    color: '#1e7e1b',
  },
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
  question: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0c460a',
  },
  textBtn: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e7e1b',
  },
  answerText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e7e1b',
  },
  btnsWrapper: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    marginHorizontal: 10,
    marginTop: 20,
    width: 120,
  },
  btnText: {
    fontSize: 18,
  },
});

export default QuizCard;
