import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

const AuthScreen = ({navigation}) => {
  let textInput = useRef(null);
  const [number, setNumber] = useState();
  const [focus, setFocus] = useState(true);

  // For number input
  const onChangePhone = e => {
    setNumber(e);
  };

  // For Continue button & OTP
  const onPress = () => {
    if (number) {
      navigation.navigate('Input OTP');
    } else {
      Alert.alert('Please enter valid 10 digits mobile number !');
    }
  };

  // For keyboard focus
  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  useEffect(() => {
    textInput.focus();
  }, []);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior={'padding'}
        style={styles.keyboard}>
        <Text style={styles.title}>{'Please input your mobile number'}</Text>

        <View style={styles.InputContainer}>
          <View style={styles.DialogView}>
            <Text>{'+91 -'}</Text>
          </View>

          <TextInput
            ref={input => (textInput = input)}
            style={styles.number}
            placeholder="123 456 7890"
            keyboardType="numeric"
            value={number}
            onChangeText={onChangePhone}
            secureTextEntry={false}
            maxLength={10}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </View>

        <View style={styles.viewBottom}>
          <TouchableOpacity onPress={onPress}>
            <View
              style={[
                styles.btn,
                {
                  backgroundColor: number ? '#244DB7' : 'gray',
                },
              ]}>
              <Text style={styles.btnText}>Continue</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboard: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    marginBottom: 30,
    marginTop: 30,
    fontSize: 16,
  },
  InputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    borderBottomWidth: 2.5,
    borderBottomColor: '#244DB7',
  },
  DialogView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    marginLeft: 3,
    flex: 1,
    height: 50,
  },
  viewBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
    alignItems: 'center',
  },
  btn: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    alignItems: 'center',
    color: '#ffffff',
  },
});
