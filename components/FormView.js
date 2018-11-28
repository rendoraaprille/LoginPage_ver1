import React from 'react';
import {TextInput, Text,  Image, StyleSheet, View} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from '../assets/styles/Styles';
import SignInButton from './SignInButton';

class FormView extends React.Component {

  onSignInButtonHandler = () => {

  }

  render(){
    return (
      <KeyboardAwareScrollView style={{ backgroundColor: '#faf8fe' }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={true}>
        <View styles={styles.container}>
          <Image source={require('../assets/Logo.png')} style={styles.logo}/>
          <Text style={styles.labelStyle}> Email </Text>
          <TextInput style={styles.inputStyle}
            label='Email'
            placeholder='Input email address'
          />
          <Text style={styles.warningStyle} label='emailWarning'> Wrong email</Text>
          <Text style={styles.labelStyle}> Password </Text>
          <TextInput style={styles.inputStyle}
            label='Password'
            placeholder='Input password'
          />
          <Text style={styles.warningStyle} label='passWarning' > Wrong password</Text>
          <SignInButton onSignIn={this.onSignInButtonHandler}/>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default FormView;
