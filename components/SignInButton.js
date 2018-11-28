import React from 'react'
import {TouchableOpacity, StyleSheet, Text} from 'react-native'

const signInButton = props =>{
  return (
    <TouchableOpacity onPress={props.onSignIn}>
          <Text style={styles.buttonStyle}>Sign In</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'mediumpurple',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
    marginTop: 20
  }
});
export default signInButton;
