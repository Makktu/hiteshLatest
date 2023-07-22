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
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setUsingNumbers] = useState(false);
  const [symbols, setUsingSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = upperCaseChars.toLowerCase();
    const numericalChars = '0123456789';
    const specialChars = '!"£$%^&*()-=][#';

    if (upperCase) characterList += upperCaseChars;
    if (lowerCase) characterList += lowerCaseChars;
    if (numbers) characterList += numericalChars;
    if (symbols) characterList += specialChars;

    const passwordResult = createPassword(characterList, passwordLength);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let a = 0; a < passwordLength; a++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPasswordState = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setUsingNumbers(false);
    setUsingSymbols(false);
  };

  return (
    <View>
      <Text>New Test App</Text>
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
