import React from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { DeskCard, PageTitle } from '../../components';
import { appActions } from '../../store';

const DesksPage = ({ desks, removeDesk }) => {
  console.log(desks);
  return (
    <ScrollView style={{ padding: 15 }}>
      <PageTitle>All Decks</PageTitle>
      {Object.entries(desks).map(([key, value]) => (
        <DeskCard
          key={key}
          desk={value}
          id={key}
          handleDeleteClick={(id) => removeDesk(id)}
        />
      ))}

      <View style={{ height: 30 }} />
    </ScrollView>
  );
};

const mapStateToProps = ({ app }) => ({
  desks: app.desks,
});

const mapDispatchtoProps = (dispatch) => ({
  ...bindActionCreators(appActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchtoProps)(DesksPage);
