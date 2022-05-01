import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import { FONTS } from "./constants";

import {
  Home,
  Contact,
  Courses,
  UserData,
  About,
  CourseDetails,
} from "./src/screens/screens.config";

const Stack = createNativeStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets//fonts/Inter-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
        >
          {(props) => <Home {...props} Name={"Edu Tech"} />}
        </Stack.Screen>
        <Stack.Screen
          name="Courses"
          component={Courses}
          options={{
            headerTitleStyle: {
              color: "#800000",
              fontSize: 28,
              fontFamily: FONTS.regular,
            },
            headerTitle: "Courses",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitleStyle: {
              color: "#800000",
              fontSize: 28,
              fontFamily: FONTS.regular,
            },
            headerTitle: "About",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitleStyle: {
              color: "#800000",
              fontSize: 28,
              fontFamily: FONTS.regular,
            },
            headerTitle: "Contact",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Student"
          component={UserData}
          options={{
            headerTitleStyle: {
              color: "#800000",
              fontSize: 28,
              fontFamily: FONTS.regular,
            },
            headerTitle: "Students",
            headerTitleAlign: "center",
          }}
        />
         <Stack.Screen
          name="CourseDetails"
          component={CourseDetails}
          options={{
            headerTitleStyle: {
              color: "#800000",
              fontSize: 28,
              fontFamily: FONTS.regular,
            },
            headerTitle: "Details",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
