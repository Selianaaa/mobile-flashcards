import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { PageTitle } from '../../components';
import { QuizCard, QuizResult, QuizError } from './fragments';

const QuizPage = ({ route, desks }) => {
  const { deskId } = route.params;
  const { title, questions } = desks[deskId];
  const cardsAmount = questions.length;

  const [correctAmount, setCorrectAmount] = useState(0);
  const [incorrectAmount, setIncorrectAmount] = useState(0);
  const [cardNumber, setCardNumber] = useState(1);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = () => {
    if (cardNumber < cardsAmount) {
      setCardNumber(cardNumber + 1);
    } else {
      setQuizCompleted(true);
    }
  };
  const handleRestart = () => {
    setCardNumber(1);
    setCorrectAmount(0);
    setIncorrectAmount(0);
    setQuizCompleted(false);
  };

  const QuizPageWrapper = ({ children }) => {
    return (
      <View style={styles.page}>
        <PageTitle>{`Quiz: ${title}`}</PageTitle>
        {children}
      </View>
    );
  };

  if (cardsAmount === 0) {
    return (
      <QuizPageWrapper>
        <QuizError deskId={deskId} />
      </QuizPageWrapper>
    );
  }

  if (quizCompleted) {
    return (
      <QuizPageWrapper>
        <QuizResult
          deskId={deskId}
          incorrectAmount={incorrectAmount}
          correctAmount={correctAmount}
          handleRestart={handleRestart}
        />
      </QuizPageWrapper>
    );
  }

  return (
    <QuizPageWrapper>
      <QuizCard
        card={questions[cardNumber - 1]}
        cardNumber={cardNumber}
        cardsAmount={questions.length}
        handleCorrect={() => {
          setCorrectAmount(correctAmount + 1);
          handleAnswer();
        }}
        handleIncorrect={() => {
          setIncorrectAmount(incorrectAmount + 1);
          handleAnswer();
        }}
      />
    </QuizPageWrapper>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 20,
    alignItems: 'center',
  },
});
const mapStateToProps = ({ app }) => ({
  desks: app.desks,
});

export default connect(mapStateToProps)(QuizPage);
