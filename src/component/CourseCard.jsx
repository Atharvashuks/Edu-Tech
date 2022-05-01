import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

import { FONTS } from "../../constants";

const CourseCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.courseContainer}>
        <View>
          <Image
            style={styles.cardImage}
            source={data.image}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.mainHeader}>{data.title}</Text>

        <Text style={styles.description}>{data.desc}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              navigation.navigate("CourseDetails", {
                courseId: data.id,
              })
            }
          >
            <Text style={styles.buttonText}> course Details </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  courseContainer: {
    padding: 25,
    backgroundColor: "rgba(255, 255, 255, 0.90)",
    textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
    margin: 10,
    marginLeft: 12,
    marginRight: 12,
    paddingTop: 10,
  },
  mainHeader: {
    fontSize: 22,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "bold",
    paddingBottom: 15,
    textAlign: "center",
    fontFamily: FONTS.bold,
  },
  description: {
    textAlign: "left",
    fontFamily: FONTS.medium,
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 16,
    color: "#7d7d7d",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonStyle: {
    backgroundColor: "#C0C0C0",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#fff3f3",
    fontFamily: FONTS.light,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
});

export default CourseCard;
