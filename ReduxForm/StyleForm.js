
import { StyleSheet } from "react-native";

const reduxStyle = StyleSheet.create({
    mainContainerView: {
     height: 200,
     width: 400,
     backgroundColor: "white",
     marginTop: 150,
    },
    textInput: {
     marginTop: 100,
     fontSize: 18,
     textAlign: "center",
    },
    addButton: {
    height: 40,
    width: 60,
    backgroundColor: "green",
    textAlign: "center",
    fontSize: 16,
    borderRadius: 10,
    marginLeft: 150,
    marginTop: 20,
    },
    addText:{
      color: "white",
      textAlign: "center",
      marginTop: 10,
    },
    updateDataMainView: {
    backgroundColor: "white",
    flex: 1,
    },
    fieldView: {
       backgroundColor: "white",
       borderWidth: 1,
       borderColor: "green",
       height: 50,
       marginLeft: 25,
       marginRight: 25,
       marginTop: 15,
       borderRadius: 10,
    },
    textTitle: {
      marginLeft: 20,
      textAlign: "left",
      fontSize: 18,
      marginTop: 10,
    },
    innerTextField: {
        flex: 1,
        marginLeft: 20,
        // textAlignVertical: true,
    },
    saveButton: {
        height: 40,
        width: 100,
        backgroundColor: "green",
        textAlign: "center",
        fontSize: 16,
        borderRadius: 10,
        marginLeft: 150,
        marginTop: 20,
    },
    saveText: {
        color: "white",
        textAlign: "center",
        marginTop: 10,
    },
    mainUpdateListView:{
     backgroundColor: "green",
     flex: 1,
     justifyContent: "space-between",
     flexDirection: "column",
    },

});


export {reduxStyle};
