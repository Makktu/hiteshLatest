import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
// form validation package Yup
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Password should be minimum of 4 characters')
    .max(16, 'Max 16 characters')
    .required('Length is required'),
});

export default function App() {
  const [count, setCount] = useState(0);
  const [notification, setNotification] = useState('MESSAGES');
  return (
    <View>
      <Text>New App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'black',
  },
  countStyle: {
    fontSize: 100,
    alignSelf: 'center',
    marginTop: 200,
    color: 'orangered',
  },
  buttonStyle: {
    color: 'dodgerblue',
    fontSize: 40,
    alignSelf: 'center',
  },
  messageStyle: {
    color: 'white',
  },
});
