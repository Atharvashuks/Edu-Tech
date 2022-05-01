import { View, StyleSheet, Text, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const Navigation = () => {
  const navigaion = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigaion.navigate("Courses")}
      >
        <Image
          source={require("../../assets/images/courses.png")}
          style={styles.iconStyle}
        />
        <Text style={styles.textStyle}>Course</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigaion.navigate("Student")}
      >
        <Image
          style={styles.iconStyle}
          source={require("../../assets/images/students.png")}
        />
        <Text style={styles.textStyle}>Student</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigaion.navigate("About")}
      >
        <Image
          source={require("../../assets/images/about.png")}
          style={styles.iconStyle}
        />
        <Text style={styles.textStyle}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigaion.navigate("Contact")}
      >
        <Image
          source={require("../../assets/images/contact.png")}
          style={styles.iconStyle}
        />
        <Text style={styles.textStyle}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textStyle: {
    textTransform: "uppercase",
    marginBottom: 0.5,
    fontSize: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});

export default Navigation;
