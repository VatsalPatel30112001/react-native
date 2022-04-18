import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Nav = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("home");
        }}
      >
        <Text style={styles.text}>
          <Icon name="home" size={30} color="white" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("search");
        }}
      >
        <Text style={styles.text}>
          <Icon name="search" size={30} color="white" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("new");
        }}
      >
        <Text style={[styles.text, styles.plus]}>
          <Icon name="plus" size={30} color="white" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("notification");
        }}
      >
        <Text style={styles.text}>
          <Icon name="bell" size={30} color="white" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("profile");
        }}
      >
        <Text style={styles.text}>
          <Icon name="user" size={30} color="white" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#758283",
    position: "relative",
    alignItems: "center",
  },
  text: {
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "red",
    // marginBottom: 10,
    marginVertical: 12,
    // paddingBottom: 10,
    color: "white",
    fontSize: 40,
  },
});

export default Nav;
