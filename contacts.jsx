import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Linking
} from 'react-native';

const Contacts = props => {
  <View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
    <Button title="Get Contacts" onPress={showContacts} />
    <FlatList
      data={props.contacts}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Button title={item.name} onPress={() => call(item)} />
      )}
    />
  </View>;
};

const mapStateToProps = state => ({
  data: state.contacts
});
const mapDispatchToProps = dispatch => ({
  setContacts: data => dispatch(actions.setContacts(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
