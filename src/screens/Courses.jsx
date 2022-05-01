import { View, FlatList, SafeAreaView } from "react-native";
import React from "react";

import Course from "../../constants/DummyCOursesData";
import { CourseCard, FocusedStatusBar } from "../component/components.config";

const Courses = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor="#181818" />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={Course}
            renderItem={({ item }) => <CourseCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: "#E0E0E0" }} />
          <View style={{ flex: 1, backgroundColor: "#E0E0E0" }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Courses;
