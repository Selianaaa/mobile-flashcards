import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useNavigation } from '@react-navigation/native';

import { PageTitle, BaseCard, BaseInput } from '../../components';
import { appActions } from '../../store';

const AddDeckPage = ({ addNewDeck }) => {
  const navigation = useNavigation();
  const [deckName, setDeckName] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <PageTitle>New Deck</PageTitle>
      <BaseCard style={styles.card}>
        <Text style={styles.text}>Title of your new Deck:</Text>
        <BaseInput value={deckName} changeHandler={setDeckName} />

        <TouchableOpacity
          disabled={!deckName.length}
          style={[
            styles.btn,
            { backgroundColor: deckName.length ? '#1e7e1b' : '#cdddcc' },
          ]}
          onPress={() => {
            addNewDeck(deckName, navigation);
            setDeckName('');
          }}
        >
          <Text
            style={[
              styles.btnText,
              { color: deckName.length ? 'white' : '#295c27' },
            ]}
          >
            Create Deck
          </Text>
        </TouchableOpacity>
      </BaseCard>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 70,
    height: 255,
    width: 310,
    alignSelf: 'center',
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
    width: 270,
    borderBottomColor: '#0c460a',
    borderBottomWidth: 2,
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

const mapDispatchtoProps = (dispatch) => ({
  ...bindActionCreators(appActions, dispatch),
});

export default connect(null, mapDispatchtoProps)(AddDeckPage);
