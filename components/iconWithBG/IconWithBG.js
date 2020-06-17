import React, { Component } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";
const IconWithBG = (props) => {
  const { color, iconName, text, size } = props;
  return (
    <View>
      <LinearGradient
        colors={["#59FBC0", "#61ECD8"]}
        start={[0.1, 0]}
        end={[0.9, 1]}
        style={{
          marginTop: 10,

          // alignSelf: "center",
          borderRadius: 30,
        }}
      >
        <TouchableOpacity
          style={{
            height: 60,
            width: 60,
            overflow: "hidden",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <FontAwesome5
            name={iconName || null}
            style={{ textAlign: "center" }}
            size={size}
            color={color || "black"}
          /> */}

          <Image
            source={require("../../assets/icons/bulb.jpg")}
            style={{
              width: 40,
              height: 40,
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>
      </LinearGradient>
      <Text style={{ color: "white", textAlign: "center", padding: 5 }}>
        {text}
      </Text>
    </View>
  );
};

export default IconWithBG;
