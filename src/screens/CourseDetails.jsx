import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

import { Course, FONTS } from "../../constants";

const CourseDetails = ({ navigation, route }) => {
  const id = route.params.courseId;

  const selectedCourse = Course.find((e) => {
    return id === e.id;
  });
  return (
    <View>
      <ScrollView>
        <View style={styles.courseContainer}>
          <View>
            <Image
              style={styles.cardImage}
              source={selectedCourse.image}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.mainHeader}>{selectedCourse.title}</Text>

          <Text style={styles.description}>{selectedCourse.desc}</Text>

          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
            }}
          />

          <View style={styles.course}>
            <Text style={styles.courseDesc}>{selectedCourse.course1}</Text>
            <Text style={styles.courseDesc}>{selectedCourse.course2}</Text>
            <Text style={styles.courseDesc}>{selectedCourse.course3}</Text>
          </View>

          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
            }}
          />

         <ScrollView>
         <View style={{marginBottom:15}}>
              <Text style={{fontSize:20,fontWeight: "bold", textTransform: "uppercase" , marginBottom: 15,paddingTop: 8}}>Instructor Details:</Text>
                  <Text style={{fontWeight: "bold",color: '#303030'}}>{selectedCourse.instructorName}</Text>
                  <Text style={{marginTop: 5,fontFamily:FONTS.regular,color: '#909090'}}>{selectedCourse.instDesc}</Text>
          </View>
         </ScrollView>

          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
            }}
          />

          <View style={[styles.buttonContainer,{marginTop:20}]}>
            <Text style={styles.price}> Rs. {selectedCourse.price}</Text>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() =>
                navigation.navigate("Courses", {
                  courseId: selectedCourse.id,
                })
              }
            >
              <Text style={styles.buttonText}> Join Now!! </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
  price: {
    backgroundColor: "#080808",
    color: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontFamily: FONTS.regular,
    textAlign: "center",
    marginRight: 25,
    borderRadius: 8,
  },
  course: {
    margin: 20,
    //   padding: 15,
    letterSpacing: 30,
    display: "flex",
    justifyContent: "space-between",
  },
  courseDesc: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    color: "#080808",
    fontFamily: FONTS.regular,
    fontWeight: "bold",
    fontSize: 15,
    textTransform: "uppercase",
  },
});

export default CourseDetails;
