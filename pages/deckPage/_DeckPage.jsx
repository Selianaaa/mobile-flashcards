import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { PageTitle, BaseButton } from '../../components';

const DeskPage = ({ route, decks }) => {
  const { deckId } = route.params;
  const { title, questions } = decks[deckId];

  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <PageTitle>{title}</PageTitle>
      <Text style={styles.subtitle}>{`${questions.length} cards`}</Text>

      <View style={styles.options}>
        <BaseButton
          pressHandler={() =>
            navigation.navigate('Add Card', { deckId: deckId })
          }
        >
          Add Card
        </BaseButton>

        <BaseButton
          pressHandler={() => navigation.navigate('Quiz', { deckId: deckId })}
        >
          Start Quiz
        </BaseButton>
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
});
const mapStateToProps = ({ app }) => ({
  decks: app.decks,
});

export default connect(mapStateToProps)(DeskPage);
