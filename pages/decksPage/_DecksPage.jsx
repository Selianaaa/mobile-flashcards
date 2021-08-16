import React from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { DeckCard, PageTitle } from '../../components';
import { appActions } from '../../store';

const DecksPage = ({ decks, removeDeck }) => {
  return (
    <ScrollView style={{ padding: 15 }}>
      <PageTitle>All Decks</PageTitle>
      {Object.entries(decks).map(([key, value]) => (
        <DeckCard
          key={key}
          deck={value}
          id={key}
          handleDeleteClick={(id) => removeDeck(id)}
        />
      ))}

      <View style={{ height: 30 }} />
    </ScrollView>
  );
};

const mapStateToProps = ({ app }) => ({
  decks: app.decks,
});

const mapDispatchtoProps = (dispatch) => ({
  ...bindActionCreators(appActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchtoProps)(DecksPage);
