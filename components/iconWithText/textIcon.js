import React from "react";
import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
const TextIcon = (props) => {
  const { color, iconName, text, number, size } = props;
  return (
    <View
      style={
        {
          // borderColor: "white",
          // borderWidth: 1,
          // flex: 0.5,
          // flexWrap: "wrap",
          // margin: 5,
          //alignItems: "center",
          // justifyContent: "center",
          //overflow:'visible'
          // padding: 5,
        }
      }
    >
      <FontAwesome5
        name={iconName || null}
        style={{ textAlign: "center" }}
        size={size}
        color={color || "white"}
      />
      <Text
        style={{
          color: color,
          fontSize: 16,

          //padding: 5,
          // overflow: "visible",
          //width: "100%",
          // letterSpacing: 5,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {number}
      </Text>
      <Text
        style={{
          color: color,
          textAlign: "center",
          fontSize: 12,

          padding: 5,
          // fontWeight: "100",
          textTransform: "uppercase",
          // width: "100%",
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default TextIcon;
