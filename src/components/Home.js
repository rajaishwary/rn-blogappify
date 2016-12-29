import React, { Component } from 'react'
import {
  AppRegistry,
  Text,
  View,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import {OffCanvasReveal} from 'react-native-off-canvas-menu';

import Menu from './menuScene';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
    this.handleMenuArray = this.handleMenuArray.bind(this);
  }

  componentDidMount() {
    dispatch(fetchCategories());
  }

  handleMenuArray() {
    return (
        [
                  {
                    title: 'Menu 1',
                    icon: <Icon name="camera" size={35} color='#ffffff' />,
                    renderScene: <Menu title="Title 1" handleMenu={this.handleMenu.bind(this)}/>
                  },
                  {
                    title: 'Menu 2',
                    icon: <Icon name="bell" size={35} color='#ffffff' />,
                    renderScene: <Menu title="Title 2" handleMenu={this.handleMenu.bind(this)}/>
                  }
                ]
      );
    
  }

  render() {
    console.log(this.props);
    return (
      <View style={{flex: 1}}>
        <OffCanvasReveal
        active={this.state.menuOpen}
        onMenuPress={this.handleMenu.bind(this)}
        backgroundColor={'#222222'}
        menuTextStyles={{color: 'white'}}
        handleBackPress={true}
        menuItems={this.handleMenuArray()}
      />

      </View>
    )
  }

  handleMenu() {
    const {menuOpen} = this.state
    this.setState({
      menuOpen: !menuOpen
    })
  }
}

function mapStateToProps(state) {
  const { categoryIndex } = state;
  return { categoryIndex };
}

export default connect(mapStateToProps)(Home);
