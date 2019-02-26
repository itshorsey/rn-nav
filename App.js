import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
  
        {data.map((mix, index) => (
          <View key={index}>
            <Button title={mix.title} onPress={() => this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: "Chichi",
              mix: mix
            })} />
          </View>
        ))}

      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigation } = this.props;
    const mix = navigation.getParam('mix', 'NO-ID');
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Text>Name: {JSON.stringify(mix.description)}</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    mode: "modal"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const data = [
  { 
    title: "Hi",
    description: "this is for you"
  },
  { 
    title: "We keep going",
    description: "I made this"
  },
  { 
    title: "Writers Write",
    description: "Open up"
  }
];