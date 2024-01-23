import React from "react";
import { Text, View ,FlatList,SafeAreaView} from "react-native";
import { reduxStyle } from "./StyleForm";
import FlatView from "./FlatListChildView";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector, useDispatch} from 'react-redux';
import { selectUser,deleteUser } from "react-redux";


 function ShowlistView({navigation}) {

  const dispatch = useDispatch();
  const userData = useSelector(selectUser);

  const showAlert = data => {
    Alert.alert('Action', 'Choose action:', [
      {
        text: 'Edit',
        onPress: () =>
          navigation.navigate('FormScreen', {
            data: data,
            editMode: true,
          }),
      },
      {
        text: 'Delete',
        onPress: () => {
          dispatch(deleteUser(data));
        },
        style: 'destructive',
      },
    ]);
  };

  const editDataAction = editableData => {
    console.log('Button Tapped', editableData);
    showAlert(editableData);
  };

    return(
    <SafeAreaView style={{flex: 1,backgroundColor: "blue"}}>
    <View style={{backgroundColor:"red", flex: 1}}>
        <FlatList
          style={{ marginRight: 10, top: 6 }}
          bounces={false}
          data={userData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <ShowUserItem user={item} onPressEdit={editDataAction} />
          )}>
        </FlatList>
    </View>
    </SafeAreaView>
    )
}

export default ShowlistView;