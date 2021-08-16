import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { PageTitle, BaseButton } from '../../components';

const DeskPage = ({ route, desks }) => {
  const { deskId } = route.params;
  const { title, questions } = desks[deskId];

  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <PageTitle>{title}</PageTitle>
      <Text style={styles.subtitle}>{`${questions.length} cards`}</Text>

      <View style={styles.options}>
        <BaseButton
          pressHandler={() =>
            navigation.navigate('Add Card', { deskId: deskId })
          }
        >
          Add Card
        </BaseButton>

        <BaseButton
          pressHandler={() => navigation.navigate('Quiz', { deskId: deskId })}
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
  desks: app.desks,
});

export default connect(mapStateToProps)(DeskPage);
