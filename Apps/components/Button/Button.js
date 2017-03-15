/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class Button extends Component {

  render() {
    return (
        <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
            <Text style={styles.buttonText}>
                {this.props.text}
            </Text>
        </TouchableOpacity>

    );
  }
}

Button.propTypes = {
  text: React.PropTypes.string,
  onPress: React.PropTypes.func,
};

Button.defaultProps = {
  text: 'Button',
  onPress: () => console.log('Button Pressed'),
};


const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#006789",
    margin: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: '500',
  }
});
