import React from "react";
import { Text, View, FlatList, StyleSheet, Image } from "react-native";

const Flatlist2 = () => {
  const names = [
    {
      name: "vatsal",
      index: 1,
      round: "round",
      image: require("../assets/icon.png"),
    },
    {
      name: "vatsal",
      index: 2,
      round: "round",
      image: require("../assets/icon.png"),
    },
    {
      name: "vatsal",
      index: 3,
      round: "round",
      image: require("../assets/icon.png"),
    },
    {
      name: "vatsal",
      index: 4,

      image: require("../assets/icon.png"),
    },
    {
      name: "vatsal",
      index: 5,

      image: require("../assets/icon.png"),
    },
    {
      name: "vatsal",
      index: 6,

      image: require("../assets/icon.png"),
    },
    {
      name: "vatsal",
      index: 52,
      image: require("../assets/icon.png"),
      round: "round",
    },
    {
      name: "vatsal",
      index: 62,
      image: require("../assets/icon.png"),
      round: "round",
    },
    {
      name: "vatsal",
      index: 53,
      image: require("../assets/icon.png"),
      round: "round",
    },
    {
      name: "vatsal",
      index: 63,
      image: require("../assets/icon.png"),
      round: "round",
    },
    {
      name: "vatsal",
      index: 54,
      image: require("../assets/icon.png"),
      round: "round",
    },
    {
      name: "vatsal",
      index: 64,
      image: require("../assets/icon.png"),
      round: "round",
    },
    {
      name: "vatsal",
      index: 56,
      image: require("../assets/icon.png"),
      round: "round",
    },
    {
      name: "vatsal",
      index: 66,
      image: require("../assets/icon.png"),
      round: "round",
    },
    {
      name: "vatsal",
      index: 57,
      image: require("../assets/icon.png"),
      round: "round",
    },
    {
      name: "vatsal",
      index: 68,
      image: require("../assets/icon.png"),
      round: "round",
    },
  ];
  return (
    <View style={style1.View}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={names}
        keyExtractor={(item) => {
          return item.index;
        }}
        renderItem={(elem) => {
          return (
            <View style={style1.view}>
              <Image source={elem.item.image} style={style1.img} />
              <Text style={style1.Text}>{elem.item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const style1 = StyleSheet.create({
  View: {
    marginVertical: 15,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
  },
  Text: {
    fontSize: 15,
    paddingHorizontal: 10,
    textAlign: "center",
    fontWeight: "bold",
    // marginVertical: 5,
  },
  img: {
    borderRadius: `50%`,
    width: 60,
    height: 60,
    borderStyle: "solid",
    borderColor: "#00BC40",
    borderWidth: 3,
    backgroundColor: "#758283",
    marginHorizontal: 8,
    marginTop: 7,
  },
  view: {
    // borderStyle: "solid",
    // borderColor: "green",
    // borderWidth: 1,
  },
});

export default Flatlist2;
