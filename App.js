import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Linking
} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Contacts from 'expo-contacts';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [permissions, setPermissions] = useState(false);

  const getPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CONTACTS);
    setPermissions(true);
  };

  const showContacts = async () => {
    const contactsList = await Contacts.getContactsAsync();
    setContacts(contactsList.data);
  };

  const call = contact => {
    let phoneNumber = contact.phoneNumbers[0].number.replace(
      /[\(\)\-\s+]/g,
      ''
    );
    let link = `tel:${phoneNumber}`;
    Linking.canOpenURL(link)
      .then(isSupported => Linking.openURL(link))
      .catch(console.error);
  };

  useEffect(() => {
    getPermissions();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Get Contacts" onPress={showContacts} />
      <FlatList
        // data={[{ id: 1, title: 'one' }, { id: 2, title: 'two' }]}
        data={contacts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Button title={item.name} onPress={() => call(item)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  }
});
