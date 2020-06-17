import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ProgressCircle from "react-native-progress-circle";
import TextIcon from "../components/iconWithText/textIcon";
import IconWithBG from "../components/iconWithBG/IconWithBG";
import { LinearGradient } from "expo-linear-gradient";
class Page1 extends Component {
  state = {};
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#06090D" }}>
        <View style={{ flex: 0, alignItems: "center", marginVertical: 40 }}>
          <ProgressCircle
            percent={78}
            radius={90}
            containerStyle={{ height: "99%" }}
            outerCircleStyle={{}}
            borderWidth={4}
            color="#61ECD8"
            shadowColor="#2A2C2E"
            bgColor="#06090D"
          >
            <Text style={{ fontSize: 18, color: "#61ECD8" }}>78%</Text>
          </ProgressCircle>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <TextIcon
            iconName="cloud-upload-alt"
            color="#5BF6C9"
            size={28}
            number="365"
            text="uploads"
          />
          <TextIcon
            iconName="cloud-upload-alt"
            color="#5BF6C9"
            size={28}
            number="365"
            text="uploads"
          />
          <TextIcon
            iconName="share-alt"
            color="#E85A22"
            size={28}
            number="156"
            text="Share"
          />
          <TextIcon
            iconName="comment-dots"
            color="#D2A33D"
            size={28}
            number="365"
            text="comments"
          />
          <TextIcon
            iconName="user"
            color="#00CCCC"
            size={28}
            number="2102"
            text="visits"
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            margin: 20,
          }}
        >
          <IconWithBG iconName="download" color="black" size={32} text="btn1" />
          <IconWithBG iconName="keyboard" color="black" size={32} text="btn2" />
          <IconWithBG
            iconName="shopping-cart"
            color="black"
            size={32}
            text="btn3"
          />
          <IconWithBG
            iconName="biohazard"
            color="black"
            size={32}
            text="btn4"
          />
          <IconWithBG iconName="bitcoin" color="black" size={32} text="btn5" />
        </View>
        <View
          style={{
            margin: 10,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <LinearGradient
            colors={["#59FBC0", "#61ECD8"]}
            start={[0.1, 0]}
            end={[0.9, 1]}
            style={{
              marginTop: 40,
              width: "45%",
              alignSelf: "center",
              borderRadius: 15,
            }}
          >
            <TouchableOpacity style={{ padding: 10 }}>
              <Text
                style={{
                  color: "#447D88",
                  textAlign: "center",
                  // fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                PAGE 1
              </Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={["#06090D", "#06090D"]}
            start={[0.1, 0]}
            end={[0.9, 1]}
            style={{
              marginTop: 40,
              width: "45%",
              alignSelf: "center",
              borderRadius: 15,
            }}
          >
            <TouchableOpacity
              style={{
                padding: 10,
                borderColor: "white",
                borderWidth: 1,
                borderRadius: 15,
              }}
              onPress={() => this.props.navigation.push("Page2")}
            >
              <Text
                style={{
                  color: "#447D88",
                  textAlign: "center",
                  // fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                PAGE 2
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    );
  }
}

export default Page1;
