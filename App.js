import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'lightgreen', height: '100%' }}>
        <Redbutton buttoncolor="purple" titlename="Purple" />
        <Redbutton buttoncolor="navy" titlename="navy" />

        <Yellowbutton />
        <MyHeader />
        <Text
          style={{
            fontWeight: 'bold',
            color: '000000',
            textAlign: 'Center',
            marginTop: 100,
          }}>
          Crew
        </Text>
      </View>
    );
  }
}

class Redbutton extends Component {
  nowWen = () => {
    alert('I am a new functionality');
  };
  render() {
    return (
      <View style={{ margin: 10 }}>
        <Button
          color={this.props.buttoncolor}
          title={this.props.titlename}
          onPress={this.nowWen}
        />
      </View>
    );
  }
}

class Yellowbutton extends Component {
  badpicker() {
    alert('My text colour is not the best');
  }
  render() {
    return (
      <View>
        <Button color="yellow" title="yellow" onPress={this.badpicker} />
      </View>
    );
  }
}

class MyHeader extends Component {
  render() {
    return (
      <div>
        <h1 style={{ backgroundColor: 'blue' }}>Hello Apericiable Lakshya!</h1>
      </div>
    );
  }
}
