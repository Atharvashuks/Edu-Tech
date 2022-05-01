import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";

import Navigation from "../component/Navigation.config";

const Home = (props) => {
  const desc = "Quis aute ea aliqua veniam magna non.";
  return (
    <View backgroundColor="white">
      <SafeAreaView style={{ backgroundColor: "white" }}>
        <ScrollView style={{ backgroundColor: "white" }}>
          <View style={styles.mainContainer}>
            <View style={styles.homeTop}>
              <Image
                source={require("../../assets/images/background.jpg")}
                style={styles.headerImage}
                resizeMode="contain"
              />
              <Text style={[styles.mainHeader, { fontWeight: "700" }]}>
                Hi!!!
              </Text>
              <Text
                style={[
                  styles.mainHeader,
                  {
                    fontSize: 40,
                    color: "#800000",
                    marginTop: 0,
                    fontWeight: "bold",
                  },
                ]}
              >
                {props.Name}
              </Text>
              <Text style={styles.paraStyle}>{desc}</Text>
            </View>

            <View style={styles.lineStyle} />
            <Navigation />
            <View
              style={[
                styles.lineStyle,
                {
                  marginVertical: 20,
                },
              ]}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 50,
    borderRadius: 20,
  },
  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  mainHeader: {
    fontSize: 30,
    color: "#344054",
    textTransform: "uppercase",
  },
  paraStyle: {
    textAlign: "left",
    fontSize: 20,
    color: "#7d7d7d",
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
  },
  lineStyle: {
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: "grey",
  },
});

export default Home;
