import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const hammeburger = () => {
  return (
    <View style={styleh.View}>
      <Text style={styleh.Text}>
        <Icon name="bars" size={30} color="white" />
      </Text>
      <Text style={[styleh.Text, styleh.text2]}>search</Text>
      <Text style={styleh.Text}>
        <Icon name="comments" size={30} color="#00BC40" />
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
