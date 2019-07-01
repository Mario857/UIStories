import React, { Component } from 'react';
import { Keyboard } from 'react-native';

const withKeyboardInfo = WrappedComponent => class WithKeyboardVisible extends Component {
  state = {
    isKeyboardUp: false,
  };

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => this.setState({ isKeyboardUp: true }),
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => this.setState({ isKeyboardUp: false }),
    );
    Keyboard.dismiss();
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  render() {
    const { isKeyboardUp } = this.state;

    return <WrappedComponent isKeyboardUp={isKeyboardUp} {...this.props} />;
  }
};


export default withKeyboardInfo;
