import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() => {
          navigation.navigate("search");
        }}
      />
      <Text>a</Text>
    </View>
  );
};

export default Home;
