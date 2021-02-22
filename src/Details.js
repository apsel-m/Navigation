import React from 'react';
import {Button, View, Text} from 'react-native';
function Details({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details .. Again"
        onPress={() => navigation.push('Details')}
      />
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
        color="#841584"
      />

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Go to first screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default Details;
