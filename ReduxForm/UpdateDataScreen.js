import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { reduxStyle } from "./StyleForm";
import DatePicker from "react-native-date-picker";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShowlistView from "./ListScreen";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import DateTimePicker from 'react-native-ui-datepicker';

const handleButtonTap = () => {
    console.log('Button in child clicked');
 };

// const renderDatePicker = () => {
//   console.log("djgfutfuy")
//   return(
//     <MyDatePickerComponent />
//   )
// };

const toggleDatePicker = () => {
    setDisplayDatePicker(true);
  };

  const onChangeDate = date => {
    const dateOnly = extractDateOnly(date);
    setSelectedDate(dateOnly);
    setDisplayDatePicker(false);
  };

  function extractDateOnly(dateTimeString) {
    const dateTime = new Date(dateTimeString);
    const year = dateTime.getFullYear();
    const month = (dateTime.getMonth() + 1).toString().padStart(2, '0');
    const day = dateTime.getDate().toString().padStart(2, '0');
    const dateOnlyString = `${year}-${month}-${day}`;
    return dateOnlyString;
  }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "lightgrey" }}>
            <View style={reduxStyle.updateDataMainView}>
                <Text style={reduxStyle.textTitle}> Email </Text>
                <View style={reduxStyle.fieldView}>
                    <TextInput 
                    placeholder="Enter Email" 
                    style={reduxStyle.innerTextField}>
                    </TextInput>
                </View>
                <Text style={reduxStyle.textTitle}> Phone </Text>
                <View style={reduxStyle.fieldView}>
                    <TextInput 
                    placeholder="Enter Phone"
                    style={reduxStyle.innerTextField}>
                    </TextInput>
                </View>
                <Text style={reduxStyle.textTitle}> DOB </Text>
                <View style={reduxStyle.fieldView}>
                    <TextInput 
                    placeholder="Select Date" 
                    style={reduxStyle.innerTextField}
                    onChangeText={renderDatePicker}
                    enterKeyHint= "done">
                    </TextInput>
                </View>
                <TouchableOpacity
                    style={reduxStyle.saveButton}
                    onPress={() => navigation.navigate('ShowlistView')}>
                    <Text style={reduxStyle.saveText}>SAVE</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        
    );
}

export default UpdateDataScreen;