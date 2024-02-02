import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

export default function Home({navigation}) {
  return (
    <ScrollView style={{ padding: 10 }}>
      <View style={styles.topNav}>
        <Text style={{ marginTop: 16, paddingRight: 15, color: "white", fontSize: 30, textAlign: "right" }}>
          Explore a world of eye health
        </Text>
        <Text style={{ paddingRight: 15, color: "white", fontSize: 19, textAlign: "right" }}>
          For your family & friends
        </Text>
      </View>
      
      <View style={styles.horizontal_line}></View>
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}>
        <Image style={{ width: 220, height: 200, padding: 15 }} source={require('./../../assets/img/family.jpg')} />
        <Text style={{ flex: 1, marginLeft: 15, fontSize: 20}}>
          Frequently asked quetions on Cataract. What causes it? How is it spread?  
        </Text>
      </View>
      <TouchableOpacity style ={{alignItems: "flex-end"}} onPress={() =>navigation.navigate("Information")}>
      <Text style={styles.links}>
          Learn More
        </Text>

      </TouchableOpacity>
      <View style={styles.horizontal_line}></View>
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}>
        <Image style={{ width: 220, height: 200, padding: 15 }} source={require('./../../assets/img/eye.png')} />
        <Text style={{ flex: 1, marginLeft: 15, fontSize: 20}}>
        Cutting-edge technology with user-friendly features to provide a quick and efficient method for detecting cataracts
        </Text>
      </View>
      <TouchableOpacity style ={{alignItems: "flex-end"}} onPress={() =>navigation.navigate("Detector")}>
      <Text style={styles.links}>
          Scan Me
        </Text>
      </TouchableOpacity>

      <View style={styles.horizontal_line}></View>
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}>
        <Image style={{ width: 220, height: 200, padding: 15 }} source={require('./../../assets/img/header.png')} />
        <Text style={{ flex: 1, marginLeft: 15, fontSize: 20}}>
          Our doctors are ready to assist you every day from 6 AM to 8 PM.
        </Text>
      </View>
      <TouchableOpacity style ={{alignItems: "flex-end"}} onPress={() =>navigation.navigate("Contact")}>
      <Text style={styles.links}>
          Contact Us
        </Text>
      </TouchableOpacity>
      <View style={styles.horizontal_line}></View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topNav: {
    width: "100%",
    height: 100,
    backgroundColor: "#6C63FF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 40,
  },

  links:{
    textAlign: "center",
    fontSize: 20,
    color:"white",
    fontWeight:"bold",
    borderRadius: 99,
    backgroundColor: "#6C63FF",
    width:"40%",
    height: 40,
    padding: 5

  },
  
  horizontal_line:{
    borderBottomWidth: 1,
    borderColor: "gray",
    padding: 10
  }
});
