import React from "react";
import { Text,View, FlatList } from "react-native";
import { reduxStyle } from "./StyleForm";

export default function FlatView(){
    return(
     <View style={reduxStyle.mainUpdateListView}>
      <Text style={{color: "black"}}>gfgfjhf@gmail.com </Text>
      <Text style={{color: "black"}}>2345376483 </Text>
      <Text style={{color: "black"}}>263943 </Text>
     </View>
    )
};