import React from "react";
import { Text, View ,FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { reduxStyle } from "./StyleForm";
import FlatView from "./FlatListChildView";

const ItemList = [{
    price: "$100",
    change: "-31",
    marketCap: 235278537,
    id: 0
  }, {
    price: "$200",
    change: "-91",
    marketCap: 235278537,
    id: 1
  }, {
    price: "$300",
    change: "-14",
    marketCap: 235278537,
    id: 2
  },
  {
    price: "$100",
    change: "-43",
    marketCap: 235278537,
    id: 3
  },
  {
    price: "$200",
    change: "-81",
    marketCap: 235278537,
    id: 4
  },
  {
    price: "$400",
    change: "-23",
    marketCap: 235278537,
    id: 5
  },
  {
    price: "$500",
    change: "-12",
    marketCap: 235278537,
    id: 6
  },
  {
    price: "$600",
    change: "-8",
    marketCap: 235278537,
    id: 7
  }]
  

export default function ShowlistView(){
    return(
    <SafeAreaView style={{flex: 1,backgroundColor: "blue"}}>
    <View style={{backgroundColor:"red", flex: 1}}>
        <FlatList
          style={{ marginRight: 10, top: 6 }}
          bounces={false}
          data={ItemList}>
          keyExtractor={item => item.id}
        </FlatList>
    </View>
    </SafeAreaView>
    )
};