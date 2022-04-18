import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Flatlist1 from "./Flatlist";
import Page from "./Page";
import Nav from "./Nav";
import Hammburger from "./Hammburger";

const Search = ({ navigation }) => {
  return (
    <View style={stylesh.View}>
      <Hammburger />
      <Flatlist1 />
      <Page style={stylesh.page} />
      <Nav navigation={navigation} style={stylesh.Nav} />
    </View>
  );
};

const stylesh = StyleSheet.create({
  View: {
    height: "100%",
    width: "100%",
    position: "relative",
    borderStyle: "solid",
    borderWidth: 2,
  },
  Nav: {
    height: 800,
    width: "100%",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "black",
  },
  page: {},
});

export default Search;
