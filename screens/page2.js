import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LineChart, StackedBarChart } from "react-native-chart-kit";
import { ProgressBar } from "react-native-paper";
import { Svg, G, Rect, Line } from "react-native-svg";
import BarChart from "../components/BarChart/BarChart";
import { LinearGradient } from "expo-linear-gradient";
const GRAPH_MARGIN = 20;
const colors = {
  axis: "#E4E4E4",
};
class Page2 extends Component {
  state = {};
  render() {
    const line = {
      labels: ["M", "T", "W", "T", "F", "S", "Today"],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 120],
          strokeWidth: 3, // optional
        },
      ],
    };
    const data = {
      labels: [
        "A",
        "",
        "B",
        "",
        "C",
        "",
        "D",

        "E",
        "",
        "F",
        "",
        "G",
        "",
        "H",
        "I",
        "J",
      ],
      //   legend: ["L1", "L2", "L3"],
      data: [
        //A
        [60, 120],
        [null],
        //B
        [30, 150],
        [null],
        //C
        [60, 120],
        [null],
        //D
        [120, 60],

        //E
        [30, 150],
        [null],
        [30, 150],
        [null],
        [150, 30],
        [null],
        [100, 80],

        [30, 150],

        [130, 50],
      ],
      barColors: ["#3DE2DB", "#243040"],
    };

    const data1 = {
      labels: ["A", "B", "C", "D", "E"],
      //   legend: ["L1", "L2", "L3"],
      data: [
        [60, 120],

        [30, 150],

        [120, 60],

        [30, 150],

        [130, 50],
      ],
      barColors: ["#3DE2DB", "#243040"],
    };
    const fill = "rgb(76, 233, 206)";
    // const data = [50, 10, 40, 95, 35, 53, 24, 50];
    const SVGHeight = 300;
    const SVGWidth = 300;
    const graphHeight = SVGHeight - 2 * GRAPH_MARGIN;
    const graphWidth = SVGWidth - 2 * GRAPH_MARGIN;

    const data2 = [
      { label: "A", value: 500 },
      { label: "B", value: 312 },
      { label: "C", value: 424 },
      { label: "D", value: 745 },
      { label: "E", value: 89 },
      { label: "F", value: 434 },
      { label: "G", value: 650 },
      { label: "H", value: 980 },
      { label: "I", value: 123 },
      { label: "J", value: 186 },
      //   { label: "Nov", value: 689 },
      //   { label: "Dec", value: 643 },
    ];
    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#06090D",
          // justifyContent: "center",
          //   alignItems: "center",
        }}
      >
        {/* <StackedBarChart
          style={{ height: 280 }}
          keys={keys}
          colors={colors}
          data={data}
          showGrid={false}
          contentInset={{ top: 10, bottom: 10 }}
        /> */}
        <Text
          style={{
            color: "white",
            margin: 0,
            fontWeight: "bold",
            fontSize: 24,
            textAlign: "center",
          }}
        >
          Text
        </Text>

        <LineChart
          data={line}
          width={Dimensions.get("window").width} // from react-native
          height={280}
          yAxisLabel={"$"}
          withInnerLines={false}
          withOuterLines={false}
          onDataPointClick={({ value }) => alert(value)}
          chartConfig={{
            backgroundColor: "#06090D",
            backgroundGradientFrom: "#06090D",
            backgroundGradientTo: "#06090D",
            backgroundGradientToOpacity: 0.5,
            verticalLabelRotation: 30,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 0.7) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 10,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            marginRight: -40,
            // backgroundColor: "#fff",
          }}
        >
          <Text
            style={{
              color: "white",
              marginRight: 60,
              marginVertical: 10,
              fontWeight: "bold",
              fontSize: 24,
              textAlign: "center",
            }}
          >
            Text
          </Text>
          <BarChart data={data2} round={100} unit="€" />
          <Text
            style={{
              color: "white",
              marginRight: 60,
              marginVertical: 10,
              fontWeight: "bold",
              fontSize: 24,
              textAlign: "center",
            }}
          >
            Text
          </Text>
          <BarChart data={data2} round={100} unit="€" />
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
            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => this.props.navigation.goBack()}
            >
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
      </ScrollView>
    );
  }
}

export default Page2;
