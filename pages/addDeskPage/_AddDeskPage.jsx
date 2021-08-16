import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useNavigation } from '@react-navigation/native';

import { PageTitle } from '../../components';
import { appActions } from '../../store';

const AddDeskPage = ({ addNewDesk }) => {
  const navigation = useNavigation();
  const [deskName, setDeskName] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <PageTitle>New Desk</PageTitle>
      <View style={styles.card}>
        <Text style={styles.text}>Title of your new Desk:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setDeskName}
          value={deskName}
        />
        <TouchableOpacity
          disabled={!deskName.length}
          style={[
            styles.btn,
            { backgroundColor: deskName.length ? '#1e7e1b' : '#cdddcc' },
          ]}
          onPress={() => {
            addNewDesk(deskName, navigation);
            setDeskName('');
          }}
        >
          <Text
            style={[
              styles.btnText,
              { color: deskName.length ? 'white' : '#295c27' },
            ]}
          >
            Create Desk
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    marginVertical: 10,
    backgroundColor: 'white',
    height: 255,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 1,
    display: 'flex',
    alignItems: 'center',
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
    width: 300,
    borderBottomColor: '#0c460a',
    borderBottomWidth: 2,
  },
  btn: {
    marginTop: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 300,
    borderRadius: 25,
  },
  btnText: { fontWeight: 'bold', fontSize: 23 },
});

const mapDispatchtoProps = (dispatch) => ({
  ...bindActionCreators(appActions, dispatch),
});

export default connect(null, mapDispatchtoProps)(AddDeskPage);
