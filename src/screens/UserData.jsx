import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const UserData = () => {
  return (
    <View>
      <View style={{ padding: 20 }}>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
        }}
      />
      <Text
        style={{ fontWeight: "bold", fontSize: 25, textTransform: "uppercase" }}
      >
        User Profile:
      </Text>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
        }}
      />
      <View style={{ display: "flex" }}>
        <View style={{ flexDirection: "row",paddingBottom: 6}}>
          <Text style={{paddingTop: 10,fontWeight: 'bold'}}>First Name: </Text>
          <Text style={{paddingTop: 10}}>Sara</Text>
          <Text style={{paddingTop: 10,fontWeight: 'bold', marginLeft: 8}}>Last Name: </Text>
          <Text style={{paddingTop: 10}}>abcd</Text>
        </View>
        <View style={{ flexDirection: "row",paddingBottom: 6}}>
          <Text style={{paddingTop: 10,fontWeight: 'bold'}}>Email: </Text>
          <Text style={{paddingTop: 10}}>sara123@gmail.com</Text>
        </View>
        <View style={{ flexDirection: "row",paddingBottom: 6}}>
          <Text style={{paddingTop: 10,fontWeight: 'bold'}}>Phone: </Text>
          <Text style={{paddingTop: 10}}>123456789</Text>
        </View>
        <View style={{ flexDirection: "row",paddingBottom: 6}}>
          <Text style={{paddingTop: 10,fontWeight: 'bold'}}>Premiun status: </Text>
          <Text style={{paddingTop: 10}}>Yes</Text>
        </View>
        </View>
        {/* <View style={{borderRight: '2px solid black' ,height: 500,left: '50%',marginLeft: '-3px', top:0,position: 'absolute'}} /> */}
        <View style={{ display: "flex", alignItems: "flex-end" ,marginTop: -141,marginRight:-10}}>
          <Image
            source={require("../../assets/images/profile.jpg")}
            resizeMode="contain"
            style={{
              width: 100,
              height: 90,
              display: "flex",
              alignItems: "flex-end",
            }}
          />
        </View>
    </View>
    {/* <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
            }}
          /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default UserData;
