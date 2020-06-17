import "react-native-gesture-handler";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Page1 from "./screens/page1";
import Page2 from "./screens/page2";

const Stack = createStackNavigator();
class App extends React.Component {
  state = {
    checked: null,
  };

  render() {
    return (
      <NavigationContainer>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Page1" component={Page1} />
            <Stack.Screen name="Page2" component={Page2} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // backgroundColor: "#21202E",
  },
});

export default App;
