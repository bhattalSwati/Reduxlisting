import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import UpdateDataScreen from './UpdateDataScreen';
import { reduxStyle } from './StyleForm';
import ShowlistView from './ListScreen';
import { UseSelector, useDispatch } from 'react-redux';
import { decrement, deleteData, increment } from './CounterSlice';

// Screen components
const HomeScreen = ({ navigation }) => {

    const count = useSelector(state => state.form.value);
    const userDatalist = useSelector(state => state.form.data);
    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    handleItemClick = item => {
        console.log('called', item);
        navigation.navigate('Form');
        navigation.navigate('Form', {
            item: item,
            isEditOn: true,
        });
    };

    handleDeleteClick = item => {
        console.log('delete', item)
        dispatch(deleteData(item))
    }

    useEffect(() => {
        setData([]);
    }, []);
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
       // <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="UpdateDataScreen" component={UpdateDataScreen} />
                    <Stack.Screen name="ShowlistView" component={ShowlistView} />
                </Stack.Navigator>
            </NavigationContainer>
      //  </Provider>
    );
};

export default InitialScreenData;