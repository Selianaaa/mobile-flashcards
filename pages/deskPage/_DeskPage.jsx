import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

//  TODO: ADD CARD, TAKE QUIZ, CARDS
const DeskPage = ({ route }) => {
  const { deskId } = route.params;

  return (
    <ScrollView style={{ padding: 15 }}>
      <Text>{`Desk ${deskId}`} </Text>
    </ScrollView>
  );
};

const mapStateToProps = ({ app }) => ({
  desks: app.desks,
});

export default connect(mapStateToProps)(DeskPage);
