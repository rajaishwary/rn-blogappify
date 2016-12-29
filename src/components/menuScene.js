import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';
import NavigationBar from 'react-native-navbar';

const { height, width } = Dimensions.get('window');

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.leftButton = this.leftButton.bind(this);
  }

  leftButton() {
    return (
        <View style={{justifyContent: 'center', alignItems: 'center', width: 88, height: 44}}>
          <Text style={styles.menuText} onPress={this.props.handleMenu}>Menu</Text>
        </View>
      );
  }

  render() {
    return(
      <View style={styles.container}>
         <NavigationBar
              title={{ title: this.props.title }}
              leftButton={this.leftButton()}
              tintColor={'#79ccd8'}
              statusBar={{tintColor: '#79ccd8'}}
              />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height,
    width,
    flex: 1,
    backgroundColor: '#fff',
  },
  menuText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
