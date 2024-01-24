
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
    width: 120,
    backgroundColor: "#57A0D3",
    textAlign: "center",
    fontSize: 16,
    borderRadius: 10,
    marginLeft: 140,
    marginTop: 20,
    marginBottom: 20,
  },
  addText: {
    color: "white",
    textAlign: "center",
    marginTop: 10,
  },
  updateDataMainView: {
    backgroundColor: "#89CFF0",
    height: 380,
    borderRadius: 10,
    marginTop: 100,
  },
  fieldView: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#57A0D3",
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
    color: "white",
  },
  innerTextField: {
    flex: 1,
    marginLeft: 20,
  },
  saveButton: {
    height: 40,
    width: 100,
    backgroundColor: "#57A0D3",
    textAlign: "center",
    fontSize: 18,
    borderRadius: 10,
    marginLeft: 150,
    marginTop: 20,
  },
  saveText: {
    color: "white",
    textAlign: "center",
    marginTop: 10,
  },
  mainUpdateListView: {
    justifyContent: "space-between",
    backgroundColor: "#57A0D3",
    padding: 15,
    margin: 4,
    borderRadius: 20,
    marginTop: 10,
  },
  inputViewStyle: {
    backgroundColor: 'white',
    margin: 5,
    height: 40,
    borderRadius: 10,
    padding: 10,
  },
  DOB: {
    justifyContent: 'center',
    color: "black",
  },
});


export { reduxStyle };
