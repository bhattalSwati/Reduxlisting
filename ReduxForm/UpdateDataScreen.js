import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, SafeAreaView, StyleSheet, Alert } from "react-native";
import { reduxStyle } from "./StyleForm";
import { useDispatch } from 'react-redux';
import DateTimePicker from 'react-native-ui-datepicker';
import { addUser, updateUser } from './CounterSlice';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const UpdateDataScreen = ({ navigation, route }) => {

  const handleButtonTap = () => {
  };

  const dispatch = useDispatch();

  const { data, editData } = route.params;
  const [emailID, setEmail] = useState(data.emailID);
  const [phoneNumber, setPhoneNum] = useState(data.phoneNumber);
  const [id, setUpdateId] = useState(data.id);
  const [selectedDate, setSelectedDate] = useState(data.selectedDate);
  const [displayDatePicker, setDisplayDatePicker] = useState(false);

  const validationCheck = () => {
    const emailRegexCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegexCheck = /^[0-9]{10}$/;

    if (emailID === '' && phoneNumber === '') {
      Alert.alert('Error', 'Please enter email and phone number.');
    } else if (!emailRegexCheck.test(emailID)) {
      Alert.alert('Error', 'Please enter a valid email address.');
    } else if (!phoneRegexCheck.test(phoneNumber)) {
      Alert.alert('Error', 'Please enter a valid phone number.');
    } else {
    if (editData) {
      const data = { emailID, phoneNumber, id, selectedDate };
      dispatch(updateUser(data));
    } else {
      const id = Math.random();
      const data = { emailID, phoneNumber, id, selectedDate };
      dispatch(addUser(data));
    }
    navigation.navigate('Home');
     }
  };

  const openDatePicker = () => {
    setDisplayDatePicker(true);
  };

  const onChangeDate = date => {
    const dateOnly = separateDate(date);
    setSelectedDate(dateOnly);
    setDisplayDatePicker(false);
  };

  function separateDate(dateTimeString) {
    const dateTime = new Date(dateTimeString);
    const year = dateTime.getFullYear();
    const month = (dateTime.getMonth() + 1).toString().padStart(2, '0');
    const day = dateTime.getDate().toString().padStart(2, '0');
    const dateOnlyString = `${year}-${month}-${day}`;
    return dateOnlyString;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}
      onStartShouldSetResponder={() => setDisplayDatePicker(false)}>
      <View style={reduxStyle.updateDataMainView}>
        <Text style={reduxStyle.textTitle}> Email </Text>
        <View style={reduxStyle.fieldView}>
          <TextInput
            placeholder="Enter Email"
            style={reduxStyle.innerTextField}
            onChangeText={text => {
              setEmail(text);
              setDisplayDatePicker(false);
            }}
            value={emailID}>
          </TextInput>
        </View>
        <Text style={reduxStyle.textTitle}> Phone Number</Text>
        <View style={reduxStyle.fieldView}>
          <TextInput
            placeholder="Enter Phone"
            style={reduxStyle.innerTextField}
            onChangeText={text => {
              setPhoneNum(text);
              setDisplayDatePicker(false);
            }}
            value={phoneNumber}
            keyboardType="numeric">
          </TextInput>
        </View>
        <Text style={reduxStyle.textTitle}> Date of Birth </Text>
        <View style={reduxStyle.fieldView}>
          <TouchableOpacity
            style={reduxStyle.inputViewStyle}
            onPress={openDatePicker}>
            <Text style={reduxStyle.DOB}>{selectedDate}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={reduxStyle.saveButton}
          onPress={validationCheck}>
          <Text style={reduxStyle.saveText}>SAVE</Text>
        </TouchableOpacity>
      </View>
      {displayDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          maximumDate={Date.now()}
          onValueChange={date => onChangeDate(date)}
        />
      )}
    </SafeAreaView>
  );
}

export default UpdateDataScreen;