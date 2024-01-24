import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import UpdateDataScreen from './UpdateDataScreen';
import { reduxStyle } from './StyleForm';
import { Provider } from 'react-redux';
import store from './Store';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from './CounterSlice';
import { deleteUser } from './CounterSlice';
import { State } from "react-native-gesture-handler";
import ShowUserItem from "./FlatListChildView";


// Screen components
const HomeScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const userData = useSelector(selectUser)

    const showAlert = userData => {
        Alert.alert('Action', 'Choose action:', [
            {
                text: 'Edit',
                onPress: () =>
                    navigation.navigate('UpdateDataScreen', {
                        data: userData,
                        editData: true,
                    }),
            },
            {
                text: 'Delete',
                onPress: () => {
                    dispatch(deleteUser(userData));
                },
                style: 'destructive',
            },
        ]);
    };

    const editDataAction = editableData => {
        showAlert(editableData);
    };

    if (userData.length === 0) {
        return (
            <View>
                <Text style={reduxStyle.textInput}>No record found</Text>
                <TouchableOpacity
                    style={reduxStyle.addButton}
                    onPress={() => navigation.navigate('UpdateDataScreen', {
                        data: {},
                        editMode: false,
                    })}>
                    <Text style={reduxStyle.addText}>ADD</Text>
                </TouchableOpacity>
            </View>
        )

    } else {
        return (
            <>
                <FlatList
                    data={userData}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <ShowUserItem user={item} onPressEdit={editDataAction} />
                    )}>
                </FlatList>
                <TouchableOpacity
                    style={reduxStyle.addButton}
                    onPress={() => navigation.navigate('UpdateDataScreen', {
                        data: {},
                        editData: false,
                    })}>
                    <Text style={reduxStyle.addText}>ADD</Text></TouchableOpacity>
            </>
        );
    }
};

// Create a stack navigator
const Stack = createNativeStackNavigator();

// Main component with navigation container
const InitialScreenData = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home"
                        component={HomeScreen}
                        options={({ navigation }) => ({
                            title: 'User List',
                            headerStyle: {
                                backgroundColor: "#89CFF0", 
                            },
                        })} />
                    <Stack.Screen name="UpdateDataScreen"
                        component={UpdateDataScreen}
                        options={({ navigation }) => ({
                            title: 'Fill Data',
                            headerStyle: {
                                backgroundColor: "#89CFF0",
                            },
                            headerBackTitleStyle: {
                                backgroundColor: 'green', 
                            },
                        })} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default InitialScreenData;