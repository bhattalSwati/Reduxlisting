import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, SafeAreaView, StyleSheet ,Alert} from "react-native";
import { reduxStyle } from "./StyleForm";
//import DatePicker from "react-native-date-picker";
import ShowlistView from "./ListScreen";
import {useDispatch} from 'react-redux';
import DateTimePicker from 'react-native-ui-datepicker';
import { addUser, updateUser } from './CounterSlice';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const UpdateDataScreen = ({navigation, route}) => {

const handleButtonTap = () => {
    console.log('Button in child clicked');
 };

 const dispatch = useDispatch();

 //const {data, editData} = route.params;
 const [emailID, setEmail] = useState();
 const [phoneNumber, setPhoneNum] = useState();
 const [id, setUpdateId] = useState();
 const [selectedDate, setSelectedDate] = useState();
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
    //  if (editData) {
    //    const data = {emailID, phoneNumber, id, selectedDate};
    //    console.log(data)
    //    dispatch(updateUser(data));
    //  } else {
    //    const id = Math.random();
    //    const data = {emailID, phoneNumber, id, selectedDate};
    //    dispatch(addUser(data));
    //  }
     navigation.navigate('ShowlistView');
   }
 };

const openDatePicker = () => {
    setDisplayDatePicker(true);
  };

  const onChangeDate = date => {
    const dateOnly = openDatePicker(date);
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
        <SafeAreaView style={{ flex: 1, backgroundColor: "lightgrey" }}
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
                <Text style={reduxStyle.textTitle}> DOB </Text>
                <View style={reduxStyle.fieldView}>
                    <TextInput 
                    placeholder="Select Date" 
                    style={reduxStyle.innerTextField}
                    onChangeText={openDatePicker}
                    enterKeyHint= "done"
                    value={selectedDate}>
                    </TextInput>
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