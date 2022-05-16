import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Hamicon from "../icons/Hamicon";
import Chaticon from "../icons/Chaticon";
import Searchitem from "../icons/Searchitem";

const hammeburger = () => {
  return (
    <View style={styleh.View}>
      <Text style={styleh.Text}>
        {/* <Icon name="bars" size={30} color="white" /> */}
        <Hamicon />
      </Text>
      {/* <Text style={[styleh.Text, styleh.text2]}>search</Text> */}
      <Searchitem style={{ marginTop: 10 }} />
      <Text style={styleh.Text}>
        {/* <Icon name="comments" size={30} color="#00BC40" /> */}
        <Chaticon />
      </Text>
    </View>
  );
};

const styleh = StyleSheet.create({
  View: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderBottomColor: "#758283",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "#758283",
    marginBottom: 20,
  },
  Text: {
    color: "white",
    marginVertical: 10,
    fontSize: 25,
  },
  text2: {
    backgroundColor: "white",
    color: "black",
    marginVertical: 8,
    width: "70%",
  },
});

export default hammeburger;
