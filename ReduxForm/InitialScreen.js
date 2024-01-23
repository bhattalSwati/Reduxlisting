import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import UpdateDataScreen from './UpdateDataScreen';
import { reduxStyle } from './StyleForm';
import ShowlistView from './ListScreen';
import { Provider } from 'react-redux';
import store from './Store';

// Screen components
const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={reduxStyle.textInput}>No record found</Text>
            <TouchableOpacity
                style={reduxStyle.addButton}
                onPress={() => navigation.navigate('UpdateDataScreen')}>
                <Text style={reduxStyle.addText}>ADD</Text>
            </TouchableOpacity>
        </View>
    );
};

// Create a stack navigator
const Stack = createNativeStackNavigator();

// Main component with navigation container
const InitialScreenData = () => {
    return (
       <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="UpdateDataScreen" component={UpdateDataScreen} />
                    <Stack.Screen name="ShowlistView" component={ShowlistView} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default InitialScreenData;