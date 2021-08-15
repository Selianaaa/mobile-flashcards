import React from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { DeskCard, PageTitle } from '../../components';

//  TODO: DELETE DESK
const DesksPage = ({ desks }) => {
  return (
    <ScrollView style={{ padding: 15 }}>
      <PageTitle>All Decks</PageTitle>
      {Object.entries(desks).map(([key, value]) => (
        <DeskCard
          key={key}
          desk={value}
          handleDeleteClick={(id) => console.log('DELETE DESK', id)}
        />
      ))}

      <View style={{ height: 30 }} />
    </ScrollView>
  );
};

const mapStateToProps = ({ app }) => ({
  desks: app.desks,
});

export default connect(mapStateToProps)(DesksPage);
