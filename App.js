import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Search from "./src/Search";
import Home from "./src/Home";
import New from "./src/New";
import Notification from "./src/Notification";
import Profile from "./src/Profile";
import Bottomnav from "./src/Bottomnav";
import Nav from "./src/Nav";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    // <View style={stylea.View}>
    //   <Search />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="nav" component={Nav} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="new" component={New} />
        <Stack.Screen name="notification" component={Notification} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="bottomnav" component={Bottomnav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const stylea = StyleSheet.create({
  View: {
    height: "100%",
  },
});

export default App;
