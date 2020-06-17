import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Input from "../components/input/input";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
class Login extends Component {
  state = {
    email: "",
    password: "",
    checked: null,
  };
  handleCheck = () => {
    const { checked } = this.state;
    if (checked) {
      this.setState({ checked: null });
    } else {
      this.setState({ checked: "check" });
    }
  };
  handleChange = (value) => {
    console.log(value);
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#21202E",
        }}
      >
        <Text
          style={{
            color: "#56BCCB",
            textAlign: "center",
            fontSize: 32,
            marginVertical: 30,
            letterSpacing: 15,
          }}
        >
          ORION
        </Text>
        <Input
          placeholder="Enter email"
          handleChange={(email) => this.setState({ email })}
        />
        <Input
          placeholder="Enter password"
          password={true}
          handleChange={(password) => this.setState({ password })}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={this.handleCheck}
            style={{
              height: 25,
              width: 25,
              borderWidth: 1,
              borderColor: "#33414E",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#2F3943",
              marginLeft: 30,
              marginRight: 10,
            }}
          >
            <FontAwesome5 name={this.state.checked} size={14} color="#4B97A4" />
          </TouchableOpacity>
          <Text style={{ color: "#445863", fontSize: 18 }}>Remember me?</Text>
        </View>
        <LinearGradient
          colors={["#353446", "#2D3C41"]}
          start={[0.1, 0]}
          end={[0.9, 1]}
          style={{
            marginTop: 40,
            width: "90%",
            alignSelf: "center",
            borderRadius: 15,
          }}
        >
          <TouchableOpacity
            style={{ padding: 10 }}
            onPress={() => console.log(this.state)}
          >
            <Text
              style={{
                color: "#447D88",
                textAlign: "center",
                // fontWeight: "bold",
                fontSize: 16,
              }}
            >
              LOGIN
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}

export default Login;
