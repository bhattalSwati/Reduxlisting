import React from "react";
import { Text,View, TouchableOpacity, Image } from "react-native";
import { reduxStyle } from "./StyleForm";

export default function ShowUserItem({user, onPressEdit}){

    const onPressEditData = () => {
        onPressEdit(user);
      };

    return(
     <View style={reduxStyle.mainUpdateListView}>
      <Text style={{color: "white", fontSize: 15}}>Email: {user.emailID}</Text>
      <Text style={{color: "white", fontSize: 15}}>Phone Number: {user.phoneNumber} </Text>
      <Text style={{color: "white", fontSize: 15}}>DOB: {user.selectedDate}</Text>
      <View>
        <TouchableOpacity style={{height: 40, width:40, marginRight:300, marginTop: -80, justifyContent: "flex-end"}}onPress={onPressEditData}>
          <Image style={{height: 20, width: 20, marginLeft: 330}} source={require('../assets/download.png')}
          />
        </TouchableOpacity>
      </View>
     </View>
    )
};